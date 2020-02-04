'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/register',controller.user.user.register);
    router.post('/login',controller.user.user.login);
    //增、删、查、获取列表
    router.post('/add',controller.blog.blog.add);
    router.get('/del',controller.blog.blog.del);
    router.post('/update',controller.blog.blog.update);
    router.get('/lists',controller.blog.blog.list);
};
