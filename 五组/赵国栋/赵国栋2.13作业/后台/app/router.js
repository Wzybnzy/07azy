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

  router.post("/addlist",controller.user.user.addlist)
  router.get("/dellist",controller.user.user.dellist)
  router.get("/list",controller.user.user.list)

};
