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
};
