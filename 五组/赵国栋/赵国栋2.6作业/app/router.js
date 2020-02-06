'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  //登录注册
  router.post("/login",controller.user.user.login)
  router.post("/register",controller.user.user.register)

  //知识库的增删查改
  router.post("/add",controller.user.user.add)
  router.get("/del",controller.user.user.del)
  router.get("/list",controller.user.user.list)
  router.post("/updata",controller.user.user.updata)

};
