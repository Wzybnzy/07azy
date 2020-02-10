'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //注册接口
  router.post('/registry',controller.user.user.registry);
  //登录接口
  router.post('/login',controller.user.user.login);
  //知识库

  //添加知识库
 router.post('/know/add',controller.know.know.add);
//修改知识库
router.post('/know/update',controller.know.know.update);
//删除知识库
router.get('/know/delete',controller.know.know.delete);
//获取知识库列表
router.get('/know/list',controller.know.know.list);


//新建文档
router.post('/file/add',controller.file.file.add);

//修改文档
router.post('/file/update',controller.file.file.update);

//删除文档
router.get('/file/del',controller.file.file.delete);

//获取文档列表
router.get('/file/list',controller.file.file.list);

//搜索文档
router.get('/file/search',controller.file.file.search);

//文档详情
router.get('/file/detail',controller.file.file.detail);
}