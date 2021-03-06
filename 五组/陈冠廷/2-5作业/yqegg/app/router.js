'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  
  //登陆注册
  router.post('/registry',controller.user.user.registry);
  router.post('/login',controller.user.user.login);
 
  //新建知识库
  router.post('/know/add',controller.know.know.add);
  router.get('/know/del',controller.know.know.del);
  router.post('/know/edit',controller.know.know.edit);
  router.post('/know/search',controller.know.know.search);
  router.get('/know/list',controller.know.know.list);
};

