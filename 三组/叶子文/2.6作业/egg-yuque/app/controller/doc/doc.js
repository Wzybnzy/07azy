'use strict';

const Controller = require('egg').Controller;

class DocController extends Controller {

  // 新建文档
  async add() {
    let { ctx } = this;
    let { doc_name, doc_content, know_id, isShow, uId, know_name } = ctx.request.body;
    if (!doc_name || !doc_content || !know_id || !isShow || !uId || !know_name) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    let res = await ctx.service.doc.doc.add({ ...ctx.request.body })
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

  // 修改文档
  async update() {
    let { ctx } = this;
    let { doc_name, doc_content, know_id, uId, id } = ctx.request.body;
    if (!doc_name || !doc_content || !know_id || !id || !uId) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    let res = await ctx.service.doc.doc.find({ know_id, uId, id });
    if (!res) {
      ctx.body = {
        code: 3,
        msg: "未找到该文档"
      }
    }
    let data = await ctx.service.doc.doc.update({ doc_name, doc_content }, { where: { know_id, uId, id } });
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

  // 删除文档
  async del() {
    let { ctx } = this;
    let { id, uId, know_id } = ctx.request.query;
    if (!id || !uId || !know_id) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    let res = await ctx.service.doc.doc.find({ id, uId, know_id });
    if (!res) {
      ctx.body = {
        code: 3,
        msg: "未找到该知识库"
      }
      return;
    }
    let data = await ctx.service.doc.doc.del({ id, uId, know_id });
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

  // 查询文档
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
    let res = await ctx.service.doc.doc.list(uId);
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

  // 搜索文档
  async search() {
    let { ctx } = this;
    let { searchVal } = ctx.request.query;
    if (!searchVal) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    let res = await ctx.service.doc.doc.search(searchVal)
    if (res) {
      ctx.body = {
        code: 1,
        data: res,
        msg: "搜索成功"
      }
    } else {
      ctx.body = {
        code: 1,
        msg: "搜索失败"
      }
    }
  }

}

module.exports = DocController;
