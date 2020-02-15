'use strict';

const Controller = require('egg').Controller;
const jwt = require("jsonwebtoken")
const vali = {
  iphone: "string",
  pwd: {
    type: 'password',
    required: true,
  }
}
class UserController extends Controller {
  async zc() {
    const { ctx } = this;
    let { iphone, pwd } = ctx.request.body;
    console.log(iphone, pwd)
    if (!iphone || !pwd) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    try {
      ctx.validate(vali)
      let data = await ctx.service.user.user.iszc(iphone)
      if (data.length > 0) {
        ctx.body = {
          code: 3,
          msg: "此用户已注册"
        }
      } else {
        let res = await ctx.service.user.user.zc(iphone, ctx.helper.help(pwd))
        if (res.affectedRows == 1) {
          ctx.body = {
            code: 1,
            msg: "注册成功"
          }
        } else {
          ctx.body = {
            code: 2,
            msg: "注册失败"
          }
        }
      }
    } catch (e) {
      ctx.body = {
        code: 4,
        msg: "参数类型不正确"
      }
    }
  }

  async login() {
    const { ctx } = this;
    let { iphone, pwd } = ctx.request.body;
    if (!iphone || !pwd) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    try {
      ctx.validate(vali);
      let data = await ctx.service.user.user.iszc(iphone);
      if (data.length > 0) {
        let res = await ctx.service.user.user.login(iphone, ctx.helper.help(pwd))
        let token = jwt.sign({ ...res[0] }, ctx.app.config.keys, { expiresIn: '7h' })
        if (res.length > 0) {
          ctx.body = {
            code: 1,
            token,
            msg: "登陆成功"
          }
        } else {
          ctx.body = {
            code: 2,
            msg: "登录失败"
          }
        }
      } else {
        ctx.body = {
          code: 3,
          msg: "此用户还没有注册"
        }
      }
    } catch (e) {
      console.log(e)
      ctx.body = {
        code: 4,
        msg: "参数类型不正确"
      }
    }
  }
}

module.exports = UserController;
