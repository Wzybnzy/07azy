'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/registry',controller.user.user.registry);
  router.post('/login',controller.user.user.login);
  router.post('/userinfo',controller.user.user.userinfo);//获取用户身份
  router.post('/userpower',controller.user.user.userpower);//获取左侧列表
};
