'use strict';

const Controller = require('egg').Controller;

class ZsgcController extends Controller {
  async add() {
    let { ctx } = this;
    let { name, iphone, biaoqian, sf, sfz, msg, djjl } = ctx.request.body;
    if (!name || !iphone || !biaoqian || !sf || !sfz || !msg || !djjl) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    let res = await ctx.service.zsgc.zsgc.add(name, iphone, biaoqian, sf, sfz, msg, djjl);
    if (res.affectedRows == 1) {
      ctx.body = {
        code: 1,
        msg: "添加成功"
      }
    } else {
      ctx.body = {
        code: 2,
        msg: "添加失败"
      }
    }
  }
  async list() {
    let { ctx } = this;
    let res = await ctx.service.zsgc.zsgc.list()
    if (res.length > 0) {
      ctx.body = {
        code: 1,
        msg: res
      }
    }
  }
  async del() {
    let { ctx } = this;
    let { id } = ctx.request.body;
    console.log(id)
    let res = await ctx.service.zsgc.zsgc.del(id)
    if (res.affectedRows !== 0) {
      ctx.body = {
        code: 1,
        msg: "删除成功"
      }
    } else {
      ctx.body = {
        code: 2,
        msg: "删除失败"
      }
    }
  }
  async select() {
    let { ctx } = this;
    let { start, page } = ctx.query;  //从第start条开始截取page条
    if (!start || !page) {
      start = 1,
        page = 5
    }
    let res = await ctx.service.zsgc.zsgc.select(start, page);
    if (res.length !== 0) {
      ctx.body = {
        code: 1,
        msg: res
      }
    } else {
      ctx.body = {
        code: 2,
        msg: "暂无数据"
      }
    }
  }
}

module.exports = ZsgcController;
