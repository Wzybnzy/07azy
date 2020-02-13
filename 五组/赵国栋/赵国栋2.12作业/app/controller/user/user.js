'use strict';

const Controller = require('egg').Controller;
const jwt = require("jsonwebtoken")

class user extends Controller {
  async login() {
    let { ctx } = this
    let { phone, pwd } = ctx.request.body

    if (!phone || !pwd) {
      ctx.body = {
        code: 3,
        mes: "缺少参数"
      }
      return
    }

    let user = await ctx.service.service.getuser(phone)

    if (!user) {
      ctx.body = {
        code: 2,
        mes: "该用户还没有注册"
      }
      return
    }

    let res = await ctx.service.service.login(phone, ctx.helper.help(pwd))
    let token = jwt.sign({ ...res[0] },
      this.app.config.keys, { expiresIn: "10h" })

    if (res.length > 0) {
      ctx.body = {
        code: 1,
        token,
        uid: res[0].id,
        mes: "登陆成功"
      }
    } else {
      ctx.body = {
        code: 0,
        mes: "登录失败"
      }
    }
  }


  async register(){
    let {ctx}=this
    let {phone,pwd}=ctx.request.body

    if(!phone||!pwd){
      ctx.body={
        code:3,
        mes:"缺少参数"
      }
      return
    }


    let data=await ctx.service.service.getuser(phone)

    if(data){
      ctx.body={
        code:2,
        mes:"该用户已经注册过了"
      }
      return;
    }

    let res=await ctx.service.service.register(phone,ctx.helper.help(pwd))
    if(res.affectedRows==1){
      ctx.body={
        code:1,
        mes:"注册成功"
      }
    }else{
      ctx.body={
        code:0,
        mes:"注册失败"
      }
    }
  }
}

module.exports = user;
