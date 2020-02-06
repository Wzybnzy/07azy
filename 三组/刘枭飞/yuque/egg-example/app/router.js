'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/zc', controller.user.user.zc);
  router.post('/login', controller.user.user.login);
  router.post('/add', controller.user.user.add);
  router.get('/select', controller.user.user.select);
  router.post('/del', controller.user.user.del);
  router.post('/updata', controller.user.user.updata);
};
