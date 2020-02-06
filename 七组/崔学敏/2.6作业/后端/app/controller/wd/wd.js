'use strict';

const Controller = require('egg').Controller;

class WdController extends Controller {
  async add() {
    let { ctx } = this;
    let { file_name, file_info, uid, isdefault, zsk_id } = ctx.request.body;
    if (!file_name || !file_info || !uid || !isdefault || !zsk_id) {
      ctx.body = {
        code: 3,
        mes: '缺少参数'
      }
      return;
    }
    let res = await ctx.service.wd.wd.add(file_name, file_info, uid, isdefault, zsk_id);
    if (res.affectedRows == 1) {
      ctx.body = {
        code: 1,
        mes: '添加文档成功'
      }
    } else {
      ctx.body = {
        code: 0,
        mes: '添加文档失败'
      }
    }
  }
  //删除
  async del() {
    let { ctx } = this;
    let { id, uid } = ctx.query;
    if (!id || !uid) {
      ctx.body = {
        code: 3,
        mes: '缺少参数'
      }
      return;
    }
    let res = await ctx.service.wd.wd.del(id, uid);
    if (res.affectedRows == 1) {
      ctx.body = {
        code: 1,
        mes: '删除文档成功'
      }
    } else {
      ctx.body = {
        code: 0,
        mes: '删除文档失败'
      }
    }
  }
  //编辑
  async update() {
    let { ctx } = this;
    let { id, file_name, file_info, uid } = ctx.request.body;
    if (!id || !file_name || !file_info || !uid) {
      ctx.body = {
        code: 3,
        mes: '缺少参数'
      }
      return;
    }
    let res = await ctx.service.wd.wd.update(id, file_name, file_info, uid);
    if (res.affectedRows == 1) {
      ctx.body = {
        code: 1,
        mes: '编辑文档成功'
      }
    } else {
      ctx.body = {
        code: 0,
        mes: '编辑文档失败'
      }
    }
  }
  async list() {
    let { ctx } = this;
    let { uid } = ctx.query;
    if (!uid) {
      ctx.body = {
        code: 3,
        mes: '缺少参数'
      }
      return;
    }
    let res = await ctx.service.wd.wd.list(uid);
//     if (res.length !== 0) {
//       ctx.body = {
//         code: 1,
//         data: res
//       }
//     } else {
// ctx.body={
//   code:0,
//   mes:'获取列表失败'
// }
//     }
ctx.body={
  code:1,
  date:res
}
  }
}

module.exports = WdController;
