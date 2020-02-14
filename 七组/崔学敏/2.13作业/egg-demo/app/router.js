'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/registry',controller.user.user.registry);
  router.post('/login',controller.user.user.login);
//添加
router.post('/addlist',controller.list.list.addlist);
//删除
router.get('/del',controller.list.list.del);
//获取数据
router.get('/getlist',controller.list.list.getlist)
};
