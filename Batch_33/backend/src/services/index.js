const users = require('./users/users.service.js');
const childList = require('./child-list/child-list.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(childList);
};
