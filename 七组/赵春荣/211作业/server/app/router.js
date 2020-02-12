'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.post('/registry', controller.user.registry);
    router.post('/login', controller.user.login);
    router.get('/getuserpower', controller.user.getuserpower); //权限
    router.get('/getuserinfo', controller.user.getuserinfo); //身份
};
