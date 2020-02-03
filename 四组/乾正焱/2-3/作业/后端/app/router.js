'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/registry',controller.user.user.registry)
  router.post('/login',controller.user.user.login)


  // 知识库
  
  // 添加知识库
  router.post('/knowledge/add',controller.knowledge.knowledge.add);
  // 编辑知识库
  router.post('/knowledge/updata',controller.knowledge.knowledge.updata);
  // 删除知识库
  router.get('/knowledge/delete',controller.knowledge.knowledge.delete);
  // 查看知识库
  router.get('/knowledge/list',controller.knowledge.knowledge.list);



  // 文档
    // 添加文档
    router.post('/files/add',controller.files.files.add);
    // 编辑文档
    router.post('/files/updata',controller.files.files.updata);
    // 删除文档
    router.get('/files/delete',controller.files.files.delete);
    // 查看文档
    router.get('/files/list',controller.files.files.list);

    // 详情
    router.get('/files/detail',controller.files.files.detail);
    // 搜索
    router.post('/files/search',controller.files.files.search);

};
