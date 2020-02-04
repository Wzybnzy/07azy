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

  // 知识库
  router.post('/know/add', controller.know.know.add);
  router.get('/know/del', controller.know.know.del);
  router.post('/know/update', controller.know.know.update);
  router.get('/know/list', controller.know.know.list);

};
