import express from '@feathersjs/express';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio';
import cors from 'cors';
import memory from 'feathers-memory';
import swagger from 'feathers-swagger';
import morgan from 'morgan';

import { initDummyData } from 'backend/initDummyData';
import { logger } from 'backend/logger';
import { generateSdk } from 'client/sdkGeneration';
import { config } from 'config';
import { BuildStatus } from 'model/Plan';

export async function createServer(): express.Express {
  logger.info('Creating Swagger Platform server...');
  // Set up specs service as in memory storage.
  const specs = memory();
  specs.docs = {
    description: 'Swagger/OpenAPI specs',
    definitions: {
      specifications: {
        type: 'object',
        additionalProperties: true,
      },
      'specifications list': {
        type: 'array',
      },
    },
  };
  const plans = memory(); // Can be seen as it's own microservice?
  plans.docs = {
    description: 'The plans used for generating SDKs according to a given specification',
    definitions: {
      plans: {
        type: 'object',
        properties: {
          specId: {
            type: 'integer',
            format: 'int64',
            description: 'ID of the specification associated with the plan',
          },
        },
        additionalProperties: true,
      },
      'plans list': {
        type: 'array',
      },
    },
  };

  const sdks = memory();
  sdks.docs = {
    description: 'The SDKs generated by Swagger/OpenAPI specs',
    definitions: {
      sdks: {
        type: 'object',
        properties: {
          planId: {
            type: 'integer',
            format: 'int64',
            description: 'ID of the plan to generate the SDK for',
          },
        },
        additionalProperties: true,
      },
      'sdks list': {
        type: 'array',
      },
    },
  };
  // Create an app that is both an express server and feathers client.
  const app: express.Express = express(feathers());
  const swaggerInfo = {
    title: 'Swagger Platform',
    description: 'Open sourced service overlay for SDK management using swagger-codegen',
  };
  // Set up application middleware.
  app
    .use(
      morgan('dev', {
        stream: logger.stream,
      }),
    )
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .configure(express.rest())
    .configure(socketio())
    .configure(
      swagger({
        docsPath: '/docs',
        uiIndex: true,
        info: swaggerInfo,
      }),
    )
    /* 
      TODO: At the moment we need to use feathers-swagger twice, once to use Swagger UI, 
      once for exposing the swagger JSON schema.
    */
    .configure(
      swagger({
        docsPath: '/swagger.json',
        uiIndex: false,
        info: swaggerInfo,
      }),
    )
    .get('/', (req, res) => res.redirect('/docs'))
    // Register Feathers services.
    .use('/specifications', specs)
    .use('/plans', plans)
    .use('/sdks', sdks)
    .use(express.errorHandler());

  await initDummyData(app.service('specifications'), app.service('plans'));
  // Set up Feathers hooks.
  app.service('plans').hooks({
    before: {
      async create(context) {
        await specs.get(context.data.specId);
        context.data.buildStatus = BuildStatus.NOTRUN;
        // TODO: Will need to change this at some point
        context.data.latestVersion = 'TODO';
        return context;
      },
    },
  });
  app.service('sdks').hooks({
    before: {
      async create(context) {
        const plan = await plans.get(context.data.planId);
        const spec = await specs.get(plan.specId);
        const generationResponse = await generateSdk(logger, spec, plan);
        /*
        TODO: The linkside of the info object is probably temporary.
        Might need to consider downloading the object from 
        wherever the Swagger gen API stores it.
        */
        context.data.info = generationResponse;

        return context;
      },
    },
  });
  // Enables CORS requests if configured to do so
  if (config.backend.useCors) {
    app.use(cors());
  }
  return app;
}

// export const backendServer = createBackendClient();
