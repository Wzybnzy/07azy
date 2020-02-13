'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post("/getuser",controller.user.user.getuser)
  router.post("/login",controller.user.user.login)
  router.post("/registry",controller.user.user.registry)
  router.get('/getuserinfo',controller.user.user.getuserinfo)
  router.get('/getlist',controller.user.user.getlist)
};
