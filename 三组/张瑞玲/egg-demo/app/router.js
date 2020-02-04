'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index)
  router.post('/login',controller.user.login)
  router.post('/registry',controller.user.registry)

  router.post('/know/add',controller.know.add)
  router.post('/know/delete',controller.know.del)
  router.post('/know/update',controller.know.update)
  router.get('/know/list', controller.know.list)

  router.post('/file/add',controller.file.add)
  router.post('/file/delete',controller.file.del)
  router.post('/file/update',controller.file.update)
  router.get('/file/list', controller.file.list)
};
