'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 用户
  router.post('/login', controller.user.user.login);
  router.post('/register', controller.user.user.register);
  router.get('/role', controller.user.user.role);
  router.get('/limit', controller.user.user.limit);

};
