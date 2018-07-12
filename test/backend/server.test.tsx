import assert from 'assert';
import { createServer } from '../../src/backend/server';

describe('test specification service', () => {
  test('registered the service', async () => {
    const app = await createServer();
    const s = app.service('specifications');
    assert.ok(s, 'Registered the service');
  });
});

describe('test plan service', () => {
  test('registered the service', async () => {
    const app = await createServer();
    const s = app.service('plans');
    assert.ok(s, 'Registered the service');
  });
});

describe('test sdks service', () => {
  test('registered the service', async () => {
    const app = await createServer();
    const s = app.service('sdks');
    assert.ok(s, 'Registered the service');
  });
});
