'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/login',controller.user.user.login)
  router.post('/register',controller.user.user.register)

  router.post('/scores/add',controller.scores.scores.add)
  router.get('/scores/del',controller.scores.scores.del)
  router.post('/scores/update',controller.scores.scores.update)
  router.get('/scores/list',controller.scores.scores.list)
};
