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
  //获取用户名
  router.post("/getuser",controller.user.user.getuser)


  //新建知识库
  router.post("/creatknow",controller.know.know.creatknow)
  //删除知识库
  router.get("/relknow",controller.know.know.relknow)
  //修改知识库
  router.post("/updateknow",controller.know.know.updateknow)
  //知识库列表
  router.post("/knowlist",controller.know.know.knowlist)
  //获取知识库名
  router.post("/getkname",controller.know.know.getkname)

  //新建文档
  router.post("/createdoc",controller.file.file.createdoc)
  //删除文档
  router.post("/deldoc",controller.file.file.deldoc)
  //修改
  router.post("/updatedoc",controller.file.file.updatedoc)
  //获取文档列表
  router.get("/doclist",controller.file.file.doclist)
};
