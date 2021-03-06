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


};
