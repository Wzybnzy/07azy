'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post("/login",controller.user.user.login)
  router.post("/registry",controller.user.user.registry)
  router.post('/know/add',controller.know.know.add)
  router.post('/know/update',controller.know.know.update)
  router.get('/know/del',controller.know.know.delete)
  router.get('/know/list',controller.know.know.list)
};
