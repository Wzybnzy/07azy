'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 注册
  router.post('/register', controller.user.Register);
  // 登陆
  router.post('/login', controller.user.Login);

  // 文档
  // 获取文档列表
  router.get('/list', controller.list.list);

  //知识库
  //获取知识库列表
  router.get('/knowlist', controller.know.knowlist);
  //添加知识库
  router.post('/knowadd', controller.know.addknowlist);
  //修改知识库
  router.post('/knowupdate', controller.know.updateknowlist);
  //删除知识库
  router.get('/knowdel', controller.know.deleteknowlist);

};
