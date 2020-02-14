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

  async addlist(){
    let {ctx}=this
    let {name,phone,card,address,lable,followup,role}=ctx.request.body

    if(!name||!phone||!card||!address||!lable||!followup||!role){
      ctx.body={
        code:3,
        mes:"缺少参数"
      }
      return
    }

    let user=await ctx.service.service.getlist(name)
    if(user){
      ctx.body={
        code:2,
        mes:"该用户已存在"
      }
      return
    }

    let res=await ctx.service.service.addlist(ctx.request.body)
    if(res.affectedRows==1){
      ctx.body={
        code:1,
        mes:"添加成功"
      }
    }else{
      ctx.body={
        code:0,
        mes:"添加失败"
      }
    }
  }

  async dellist(){
    let {ctx}=this
    let {id}=ctx.request.query

    let res=await ctx.service.service.dellist(id)
    if(res.affectedRows!==0){
      ctx.body={
        code:1,
        mes:"删除成功"
      }
    }else{
      ctx.body={
        code:0,
        mes:"删除失败"
      }
    }
  }

  async list(){
    let {ctx}=this
    let {page=1,limit=6}=ctx.request.query

    let res=await ctx.service.service.list(page,limit)

    ctx.body={
      code:1,
      ...res
    }
  }
}

module.exports = user;
