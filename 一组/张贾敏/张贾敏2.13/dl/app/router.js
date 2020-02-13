'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);


  //注册

  router.post("/registry",controller.user.user.registry)

  //登录
  router.post("/login",controller.user.user.login)
  

  //添加
  router.post("/add",controller.zs.zs.add)

  //删除
  router.get("/del",controller.zs.zs.del)

  //别表
  router.get("/list",controller.zs.zs.list)

};
