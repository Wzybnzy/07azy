'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.post('/login', controller.home.login);
    router.post('/register', controller.home.register);

    router.post('/add', controller.home.add);

    router.post('/update', controller.home.update);
    router.get('/delete', controller.home.delete);
    router.get('/getlist', controller.home.getlist);
};
