'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //注册
  router.post("/register", controller.user.register);
  //登录
  router.post("/login", controller.user.login);
  //修改简介
  router.put("/updataJianjie", controller.user.updataJianjie);
  //知识库的增删改查
  router.resources("store","/store",controller.store)
  
};
