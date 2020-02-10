'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post("/login",controller.user.user.login)
  router.post("/registry",controller.user.user.registry)


  //知识库
  //添加知识库
  router.post('/konw/add', controller.konw.konw.add);
  //修改知识库
   router.post('/konw/update', controller.konw.konw.update);

  // //  //删除知识库
   router.get('/konw/del', controller.konw.konw.delete);
 
  // //  //获取知识库的列表
   router.get('/konw/list', controller.konw.konw.list);

     //文档

  //新建文档
  // router.post('/file/add', controller.file.file.add);;

  // // 修改文档
  // router.post('/file/update', controller.file.file.update);

  // //删除
  // router.get('/file/del', controller.file.file.delete);

  // //获取文档列表
  // router.get('/file/list', controller.file.file.list);

  // //搜索文档
  // router.get('/file/search', controller.file.file.search);

  // //文档详情
  // router.get('/file/detail', controller.file.file.detail);

  // //关注作者
  // router.post('/follow/followadd', controller.follow.follow.follow);
  // //获取所有关注过的人
  // router.get('/follow/followlist', controller.follow.follow.followlist);

  // //取消关注
  // router.get('/follow/followdel', controller.follow.follow.followdel);
};
