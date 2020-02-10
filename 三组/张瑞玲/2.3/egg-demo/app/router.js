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
  router.get('/know/delete',controller.know.del)
  router.post('/know/update',controller.know.update)
  router.get('/know/list', controller.know.list)

  router.post('/file/add',controller.file.add)
  router.get('/file/delete',controller.file.del)
  router.post('/file/update',controller.file.update)
  router.get('/file/list', controller.file.list)
  router.get('/file/search', controller.file.search)
  router.get('/file/detail', controller.file.detail);

  router.post('/follow/followadd', controller.follow.follow);
  router.get('/follow/followlist', controller.follow.followlist);
  router.get('/follow/followdel', controller.follow.followdel);


  router.post('/coll/add', controller.collection.add);
  router.get('/coll/list', controller.collection.list);
  router.get('/coll/del', controller.collection.del);
};
