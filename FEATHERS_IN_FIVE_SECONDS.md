# A TLDR of Feathers Js

You can find all the information here.
https://docs.feathersjs.com/guides/basics/hooks.html

## The app
is in `index.tsx`

## Feathers Services
An interface to interact with data through CRUD methods.
Abstracts data operations.

```
class myService {
  async find(params) {
    return [];
  }
  async get(id, params) {}
  async create(data, params) {}
  async update(id, data, params) {}
  async patch(id, data, params) {}
  async remove(id, params) {}
}

app.use('/my-service', new myService());
```

- `id` - The unique identifier for the data
- `data` - The data sent by the user (for creating and updating)
- `params` (optional) - Additional parameters, for example the authenticated user or the query

**Registering a service**: `app.use(path, service)` where `path` is the name of the service or a URL. This makes the service become an emitter so you can do things like `service.on('created', data => { my callback stuff here })`.

**Getting a service**: `app.service(path)` then we can call any of it's methods i.e. create, updated etc.

## Feathers Hooks
Middleware functions that can be registered and called before, after or on error of a service method. These can be chained.

### Hook function
Takes the `hook context` as a parameter and either returns that or nothing.
Run in order of reregistration.
I error, it will return the error skipping remaining hook functions.

Can be wrapped making them more modular.
```
const setTimestamp = name => {
  return async context => {
    context.data[name] = new Date();

    return context;
  }
} 

app.service('messages').hooks({
  before: {
    create: setTimestamp('createdAt'),
    update: setTimestamp('updatedAt')
  }
});
```

### Hook context
An object which contains information about the service method call.
Has read only attributes about the application/service/method and writeable properties including params, id, data, errors and result.

https://docs.feathersjs.com/guides/basics/hooks.html#hook-context 

An example of defining hooks for each of the CRUD methods of a service. Chaining and thus order of execution is made obvious when listed like so.

```
const messagesHooks = {
  before: {
    all: [ hook01() ], // Special keyword, things here will run before CURD specific hooks.
    find: [ hook11() ],
    get: [ hook21() ],
    create: [ hook31(), hook32() ],
    update: [ hook41() ],
    patch: [ hook51() ],
    remove: [ hook61() ],
  },
  after: {
    all: [ hook05() ],
    find: [ hook15(), hook16() ],
    create: [ hook35() ],
    update: [ hook45() ],
    patch: [ hook55() ],
    remove: [ hook65() ],
  }
};

app.service('messages').hooks(messagesHooks);
```

Before hooks are good for data validation and auth, feathers has it's own error lib that looks good.

https://docs.feathersjs.com/guides/basics/hooks.html#validating-data

Can also add hooks at the application level that occur before, after or on error of all services hooks.

### WebHook
A WebHook is a HTTP callback. Then a HTTP request is made, a WebHook can be triggered to notify something else or do something else. This allows real time data updates. You can use this to push notifications saying something happened, or pipe/process data somewhere else, authorize users before the request returns data etc. Pretty much when this HTTP call happens do this before or after etc.