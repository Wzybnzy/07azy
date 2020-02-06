'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login',controller.home.login);
  router.post('/register',controller.home.register);

  //知识库
  router.post('/know/add',controller.know.add);
  router.get('/know/list',controller.know.list); 
  router.get('/know/del',controller.know.del);
  router.post('/know/update',controller.know.update);  

  //文档
  router.post('/file/add',controller.file.add);
  router.get('/file/list',controller.file.list); 
  router.get('/file/del',controller.file.del);
  router.post('/file/update',controller.file.update);
  router.get('/file/search',controller.file.search);
  router.get('/file/detail',controller.file.detail);
};
