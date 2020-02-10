'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  //注册
  router.post("/register",controller.user.user.register)
  //登陆
  router.post("/login",controller.user.user.login)
  //获取身份权限
  router.post("/statu",controller.user.user.statu)
};
