'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  //登陆
  router.post("/login",controller.user.user.login)
  //注册
  router.post("/register",controller.user.user.register)
  //新建数据库
  router.post("/creatknow",controller.know.know.creatknow)
};
