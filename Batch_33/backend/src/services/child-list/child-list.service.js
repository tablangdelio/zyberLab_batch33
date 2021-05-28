// Initializes the `childList` service on path `/child-list`
const { ChildList } = require('./child-list.class');
const createModel = require('../../models/child-list.model');
const hooks = require('./child-list.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/child-list', new ChildList(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('child-list');
  service.publish((data, context) => {
    return app.channel(`anonymous`);
  });
  service.hooks(hooks);
};
