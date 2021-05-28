const assert = require('assert');
const app = require('../../src/app');

describe('\'childList\' service', () => {
  it('registered the service', () => {
    const service = app.service('child-list');

    assert.ok(service, 'Registered the service');
  });
});
