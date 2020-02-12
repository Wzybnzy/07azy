'use strict';

const createRule = {
  user: {
    type: 'string',
  },
  pwd: {
    type: 'password',
  },
};
const jwt = require("jsonwebtoken");

const Controller = require('egg').Controller;

class UserController extends Controller {

  // 登录
  async login() {
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
      if (!res) {
        ctx.body = {
          code: 2,
          msg: "用户名不存在"
        }
        return;
      }
      pwd = ctx.helper.help(pwd);
      let data = await ctx.service.user.user.find({ user, pwd });
      let token = jwt.sign({ ...data }, this.app.config.keys);
      if (data) {
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
        code: 6,
        msg: "表单校验失败"
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
      if (res) {
        ctx.body = {
          code: 2,
          msg: "用户名已存在"
        }
        return;
      }
      pwd = ctx.helper.help(pwd);
      let data = await ctx.service.user.user.add({ user, pwd });
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
    } catch (error) {
      ctx.body = {
        code: 6,
        msg: "表单校验失败"
      }
    }
  }

  // 身份
  async role() {
    let { ctx } = this;
    let { uId } = ctx.query;
    if (!uId) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    let res = await ctx.service.user.user.userRole(uId);
    if (res.length > 0) {
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

  // 权限
  async limit() {
    let { ctx } = this;
    let { uId } = ctx.query;
    if (!uId) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    let res = await ctx.service.user.user.userLimit(uId);
    if (res.length > 0) {
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

module.exports = UserController;
