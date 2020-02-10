'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //注册
  router.post('/register',controller.user.user.register)
  //登录
  router.post('/login',controller.user.user.login)
  

  //知识库
  //添加知识库
  router.post('/know/add',controller.know.know.add)
  //修改
  router.post('/know/update',controller.know.know.update)
  // //删除
  router.get('/know/del',controller.know.know.delete)
  // //获取知识库列表
  router.get('/know/list',controller.know.know.list)
};
