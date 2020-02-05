'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/registry', controller.user.user.registry);
  router.post('/login', controller.user.user.login);

  // 知识库
  router.get("/know/list",controller.know.know.list)
  router.post("/know/add",controller.know.know.add)
  router.get("/know/del",controller.know.know.del)
  router.post("/know/update",controller.know.know.update)
};
