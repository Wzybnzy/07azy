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
  //删除数据库
  router.get("/relknow",controller.know.know.relknow)
  //修改数据库
  router.post("/updateknow",controller.know.know.updateknow)
  ///数据库列表
  router.get("/knowlist",controller.know.know.knowlist)
};
