'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/registry',controller.user.user.registry)
  router.post('/login',controller.user.user.login)
  router.get('/getuserinfo',controller.user.user.getuserinfo)
};
