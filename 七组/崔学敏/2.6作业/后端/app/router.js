'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
//知识库
  router.post('/register',controller.user.user.register);
    router.post('/login',controller.user.user.login);
    //增、删、查、获取列表
    router.post('/add',controller.blog.blog.add);
    router.get('/del',controller.blog.blog.del);
    router.post('/update',controller.blog.blog.update);
    router.get('/lists',controller.blog.blog.list);
    //文档
    //添加
    router.post('/wd/add',controller.wd.wd.add);
    //删除
    router.get('/wd/del',controller.wd.wd.del);
    //编辑
    router.post('/wd/update',controller.wd.wd.update);
    //获取数据列表
    router.get('/wd/list',controller.wd.wd.list);
};
