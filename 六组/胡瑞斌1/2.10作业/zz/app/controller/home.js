'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken')
const createRule = {
  name: {
    type: 'string',
  },
  pwd: {
    type: 'password'
  },
};

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async register() {
    const { ctx } = this;
    let { name, pwd } = ctx.request.body
    if (!name || !pwd) {
      ctx.body = {
        code: 3,
        mes: '缺少参数'
      }
      return
    }
    try {
      ctx.validate(createRule);
      let user = await ctx.service.index.getuser(name)
      if (user.length > 0) {
        ctx.body = {
          code: 2,
          mes: '该用户已经注册'
        }
      } else {
        let res = await ctx.service.index.register(name, ctx.helper.help(pwd))
        if (res.affectedRows == 1) {
          ctx.body = {
            code: 1,
            mes: '注册成功'
          }
        } else {
          ctx.body = {
            code: 0,
            mes: '注册失败'
          }
        }
      }
    } catch (e) {
      ctx.body = {
        code: 4,
        mes: '参数不正确'
      }
    }
  }
  async login() {
    const { ctx } = this;
    let { name, pwd } = ctx.request.body
    if (!name || !pwd) {
      ctx.body = {
        code: 3,
        mes: '缺少参数'
      }
      return
    }
    try {
      let user = await ctx.service.index.getuser(name)
      if (user.length == 0) {
        ctx.body = {
          code: 2,
          mes: '该用户没有注册'
        }
      } else {
        let res = await ctx.service.index.login(name, ctx.helper.help(pwd))
        let token = jwt.sign({ ...res[0] }, this.config.keys, { expiresIn: '7h' })
        if (res.length > 0) {
          ctx.body = {
            code: 1,
            token,
            uid: res[0].id,
            mes: '登录成功'
          }
        } else {
          ctx.body = {
            code: 0,
            mes: '登录失败'
          }
        }
      }
    } catch (e) {
      ctx.body = {
        code: 4,
        mes: '参数不正确'
      }
    }
  }
  async getuser(){
    const {ctx} = this
    let {uid} = ctx.query
    if(!uid){
      ctx.body={
        code:3,
        mes:'缺少参数'
      }
      return
    }
    let res = await ctx.service.index.getusert(uid)
    if(res.length>0){
      ctx.body={
        code:1,
        data:res,
        mes:'查找成功'
      }
    }else{
      ctx.body={
        code:0,
        mes:'查找失败'
      }
    }
  }
}

module.exports = HomeController;
