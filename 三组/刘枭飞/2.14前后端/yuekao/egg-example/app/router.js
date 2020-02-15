'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/zc', controller.user.user.zc);
  router.post('/login', controller.user.user.login);
  router.post('/add', controller.zsgc.zsgc.add);
  router.post('/del', controller.zsgc.zsgc.del);
  router.get('/select', controller.zsgc.zsgc.select);
  router.get('/list', controller.zsgc.zsgc.list);
};
