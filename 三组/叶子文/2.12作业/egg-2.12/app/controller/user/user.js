'use strict';

const Controller = require('egg').Controller;
const jwt = require("jsonwebtoken")

class UserController extends Controller {

  // 登录
  async login() {
    let { ctx } = this;
    let { tel, pwd } = ctx.request.body;
    if (!tel || !pwd) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    let res = await ctx.service.user.user.find({ tel });
    if (!res) {
      ctx.body = {
        code: "2",
        msg: "手机号为注册"
      }
      return;
    }
    pwd = ctx.helper.help(pwd);
    let data = await ctx.service.user.user.find({ tel, pwd });
    let token = jwt.sign({ ...data }, ctx.app.config.keys,{expiresIn:'9000'})
    if (data) {
      ctx.body = {
        code: 1,
        uId: data.id,
        token,
        msg: "登陆成功"
      }
    } else {
      ctx.body = {
        code: 0,
        msg: "登录失败"
      }
    }
  }

  // 注册
  async register() {
    let { ctx } = this;
    let { tel, pwd } = ctx.request.body;
    if (!tel || !pwd) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    let res = await ctx.service.user.user.find({ tel });
    if (res) {
      ctx.body = {
        code: 3,
        msg: "手机号已注册"
      }
      return;
    }
    pwd = ctx.helper.help(pwd);
    let data = await ctx.service.user.user.add({ tel, pwd });
    if (data.affectedRows == 1) {
      ctx.body = {
        code: 1,
        msg: "注册成功"
      }
    } else {
      ctx.body = {
        code: 0,
        msg: "注册失败"
      }
    }
  }

}

module.exports = UserController;
