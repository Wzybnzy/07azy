'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post("/login",controller.user.user.login)
  router.post("/registry",controller.user.user.registry)

  // 文件
  router.get("/file/list",controller.file.file.list)
  router.post("/file/add",controller.file.file.add)
  router.get("/file/del",controller.file.file.del)
  router.post("/file/update",controller.file.file.update)

  // 知识库
  router.get("/know/list",controller.know.know.list)
  router.post("/know/add",controller.know.know.add)
  router.get("/know/del",controller.know.know.del)
  router.post("/know/update",controller.know.know.update)
};
