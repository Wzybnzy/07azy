'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post("/registry",controller.user.user.registry)

  //登录
  router.post("/login",controller.user.user.login)

  //获取身份验证的接口
  router.get("/getrole",controller.user.user.getrole)
};
