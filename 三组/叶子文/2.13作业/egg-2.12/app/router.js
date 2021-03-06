'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/login', controller.user.user.login);
  router.post('/register', controller.user.user.register);

  // list
  router.post('/list/add', controller.list.list.add);
  router.get('/list/del', controller.list.list.del);
  router.get('/list/list', controller.list.list.list);

};
