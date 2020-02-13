'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //用户注册
  router.post('/register',controller.user.user.register)
  //用户登录
  router.post('/login',controller.user.user.login)
  //列表添加
  router.post('/add',controller.list.list.add)
  //列表删除
  router.get('/del',controller.list.list.del)
  //列表获取
  router.get('/getall',controller.list.list.getall)
};
