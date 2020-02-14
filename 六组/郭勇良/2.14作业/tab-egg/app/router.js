'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post("/registry",controller.user.user.registry)
  router.post("/login",controller.user.user.login)
  router.post("/addlist",controller.list.list.addlist)
  router.get("/dellist",controller.list.list.dellist)
  router.get("/getlist",controller.list.list.getlist)
};
