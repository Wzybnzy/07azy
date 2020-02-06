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
  router.post('/know/update', controller.know.know.update);
  router.get('/know/del', controller.know.know.del);
  router.get('/know/list', controller.know.know.list);

  // 文档
  router.post('/doc/add', controller.doc.doc.add);
  router.post('/doc/update', controller.doc.doc.update);
  router.get('/doc/del', controller.doc.doc.del);
  router.get('/doc/list', controller.doc.doc.list);
  router.get('/doc/search', controller.doc.doc.search); // 搜素

};
