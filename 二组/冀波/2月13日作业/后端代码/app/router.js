'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //注册接口
  router.post('/registry',controller.user.user.registry);
  //登录接口
  router.post('/login',controller.user.user.login);
  //添加列表接口
  router.post('/addlist',controller.list.list.addlist);
  //删除列表接口
  router.get('/dellist',controller.list.list.dellist);
  //获取列表
  router.get('/list',controller.list.list.getlist);
};
