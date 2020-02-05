'use strict';

const Controller = require('egg').Controller;

class KnowController extends Controller {

  // 新建知识库
  async add() {
    let { ctx } = this;
    let { know_name, brief, isShow, uId } = ctx.request.body;
    if (!know_name || !brief || !isShow || !uId) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    let res = await ctx.service.know.know.add({ ...ctx.request.body });
    if (res.affectedRows == 1) {
      ctx.body = {
        code: 1,
        msg: "新建成功"
      }
    } else {
      ctx.body = {
        code: 0,
        msg: "新建失败"
      }
    }
  }

  // 删除知识库
  async del() {
    let { ctx } = this;
    let { id, uId } = ctx.request.query;
    if (!id || !uId) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    let res = await ctx.service.know.know.find({ id, uId });
    if (!res) {
      ctx.body = {
        code: 3,
        msg: "未找到该知识库"
      }
    }
    let data = await ctx.service.know.know.del(id, uId);
    if (data.affectedRows == 1) {
      ctx.body = {
        code: 1,
        msg: "删除成功"
      }
    } else {
      ctx.body = {
        code: 0,
        msg: "删除失败"
      }
    }
  }

  // 修改知识库
  async update() {
    let { ctx } = this;
    let { know_name, brief, isShow, id, uId } = ctx.request.body;
    if (!know_name || !brief || !isShow || !id || !uId) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    let res = await ctx.service.know.know.find({ id, uId });
    if (!res) {
      ctx.body = {
        code: 3,
        msg: "未找到该知识库"
      }
    }
    let data = await ctx.service.know.know.update({ ...ctx.request.body });
    if (data.affectedRows == 1) {
      ctx.body = {
        code: 1,
        msg: "修改成功"
      }
    } else {
      ctx.body = {
        code: 0,
        msg: "修改失败"
      }
    }
  }

  // 获取所有知识库
  async list() {
    let { ctx } = this;
    let { uId } = ctx.request.query;
    if (!uId) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    let res = await ctx.service.know.know.list(uId);
    if (res) {
      ctx.body = {
        code: 1,
        data: res,
        msg: "查找成功"
      }
    } else {
      ctx.body = {
        code: 0,
        msg: "查找失败"
      }
    }
  }

}

module.exports = KnowController;
