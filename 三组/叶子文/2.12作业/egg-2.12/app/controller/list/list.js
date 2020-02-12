'use strict';

const Controller = require('egg').Controller;
const jwt = require("jsonwebtoken")

class ListController extends Controller {

  // 添加
  async add() {
    let { ctx } = this;
    let { name, tel, label, cart, address, followup, time, role } = ctx.request.body;
    if (!name || !tel || !label || !cart || !address || !time || !role || !followup) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    let res = await ctx.service.list.list.find({ tel });
    if (res) {
      ctx.body = {
        code: 2,
        msg: "该用户已添加，请去修改"
      }
      return;
    }
    let data = await ctx.service.list.list.add({ ...ctx.request.body });
    if (data.affectedRows == 1) {
      ctx.body = {
        code: 1,
        msg: "添加成功"
      }
    } else {
      ctx.body = {
        code: 0,
        msg: "添加失败"
      }
    }
  }

}

module.exports = ListController;
