import fetch from 'node-fetch';

import { Spec } from 'model/Spec';

const SWAGGER_CODEGEN_ENDPOINT = 'http://generator.swagger.io/api/gen/clients/';

export async function generateSdk(spec: Spec): Promise<any> {
  /* Generates an SDK for a Spec
  * @param {Spec} spec - The Spec object for which the sdk needs to be generated
  * @return {Promise<string>} - The URL from which the sdk can be downloaded
  */

  /* tslint:disable:no-console */
  // TODO: Use a logging framework instead of console.log

  console.log('generateSdk');
  const body = { swaggerUrl: spec.path };
  // TODO: Allow language selection, should be from Spec.
  const response = await fetch(SWAGGER_CODEGEN_ENDPOINT + 'python', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
  const json = await response.json();
  console.log('response as json: ' + JSON.stringify(json));
  if (json.type === 'error') {
    console.log('body: ' + JSON.stringify(body));
    throw new Error(json.message);
  }
  return json;
}
