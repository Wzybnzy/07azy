'use strict';

const createRule = {
  user: {
    type: 'string',
  },
  pwd: {
    type: 'password'
  },
};
const jwt = require("jsonwebtoken")
const Controller = require('egg').Controller;

class UserController extends Controller {

  // 登录
  async login() {
    let { ctx } = this;
    let { user, pwd } = ctx.request.body;
    // 判断参数是否传入
    if (!user || !pwd) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    try {
      ctx.validate(createRule);
      let res = await ctx.service.user.user.find({ user })
      if (res == null) {
        ctx.body = {
          code: 2,
          mag: "用户名不存在"
        }
        return;
      }
      pwd = ctx.helper.help(pwd);
      let data = await ctx.service.user.user.find({ user, pwd });
      let token = jwt.sign({ ...data }, this.app.config.keys, { expiresIn: "7h" })
      if (data != null) {
        ctx.body = {
          code: 1,
          token,
          uId: data.id,
          msg: "登陆成功"
        }
      } else {
        ctx.body = {
          code: 0,
          msg: "登录失败"
        }
      }
    } catch (error) {
      ctx.body = {
        code: 4,
        msg: "参数类型不正确"
      }
    }
  }

  // 注册
  async register() {
    let { ctx } = this;
    let { user, pwd } = ctx.request.body;
    if (!user || !pwd) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    try {
      ctx.validate(createRule);
      let res = await ctx.service.user.user.find({ user });
      if (res != null) {
        ctx.body = {
          code: 2,
          msg: "用户名已存在"
        }
        return;
      }
      pwd = ctx.helper.help(pwd);
      let data = await ctx.service.user.user.add(user, pwd);
      if (data) {
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
    } catch (error) {
      ctx.body = {
        code: 4,
        msg: "参数类型不正确"
      }
    }
  }

}

module.exports = UserController;
