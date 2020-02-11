'use strict';

const Controller = require('egg').Controller;
const jwt = require("jsonwebtoken")
const createRule = {
  name: {
    type: 'string',
  },
  password: {
    type: 'password',
  }
}
class UserController extends Controller {
  async registry() {
    let { ctx } = this
    let { name, pwd } = ctx.request.body
    if (!name || !pwd) {
      ctx.body = {
        code: 3,
        mes: "参数不全"
      }
      return
    }
    let user = await ctx.service.user.user.getuser(name)
    if (user.length > 0) {
      ctx.body = {
        code: 2,
        mes: "已经注册过了"
      }
      return
    }
    let res = await ctx.service.user.user.registry(name, ctx.helper.help(pwd))
    if (res.affectedRows == 1) {
      ctx.body = {
        code: 1,
        mes: "注册成功"
      }
    } else {
      ctx.body = {
        code: 0,
        mes: "注册失败"
      }
    }
  }
  async login() {
    let { ctx } = this
    let { name, pwd } = ctx.request.body
    if (!name || !pwd) {
      ctx.body = {
        code: 3,
        mes: "参数不全"
      }
      return
    }
    let user = await ctx.service.user.user.getuser(name)
    if (user.length == 0) {
      ctx.body = {
        code: 4,
        mes: "该用户未注册"
      }
      return
    }
    let res = await ctx.service.user.user.login(name, ctx.helper.help(pwd))
    let token=jwt.sign({...res[0]},this.app.config.keys,{expiresIn:'10h'})
    if(res.length>0){
      ctx.body = {
        code: 1,
        token,
        uid:res[0].id,
        mes: "登录成功"
      }
    }else{
      ctx.body = {
        code: 0,
        mes: "登录失败"
      }
    }
  }
}

module.exports = UserController;
