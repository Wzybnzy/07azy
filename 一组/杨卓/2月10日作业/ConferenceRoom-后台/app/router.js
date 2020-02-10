'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //用户
  //注册
  router.post('/register',controller.user.user.register)
  //登录
  router.post('/login',controller.user.user.login)
  //用户身份
  router.get('/getuserinfo',controller.user.user.getuserinfo)
};
