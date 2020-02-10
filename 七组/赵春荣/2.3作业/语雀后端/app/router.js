'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.post('/registry', controller.user.registry);
    router.post('/login', controller.user.login);
    router.post('/addknow', controller.user.addknow);
    router.post('/updateknow', controller.user.updateknow);
    router.get('/delknow', controller.user.delknow);
    router.get('/getknow', controller.user.getknow);
};
