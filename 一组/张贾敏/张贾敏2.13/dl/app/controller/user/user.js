'use strict';

const Controller = require('egg').Controller;
const jwt=require("jsonwebtoken")
const createRule = {
    phone: {
      type: 'string',
    },
    pwd: {
      type: 'password'
    },
  }

class UserController extends Controller {

  async registry() {
    let {ctx}=this;
    let {phone,pwd}=ctx.request.body;
    if(!phone||!pwd){
        ctx.body={
            code:3,
            mes:"参数不能为空"
        }
        return
    }
   try{
    ctx.validate(createRule)
    let ph=await ctx.service.user.user.getphone(phone)
    console.log(ph,"123")
    if(ph.length>0){
        ctx.body={
            code:2,
            mes:"手机号已经被注册过了，请重新注册一个"
        }
        return
    }

    let res=await ctx.service.user.user.registry(phone,ctx.helper.help(pwd))
    console.log(res,"456")

    if(res. affectedRows===1){
        ctx.body={
            code:1,
            // token:"ghj",
            mes:"注册成功"
        }
    }else{
        ctx.body={
          code:0,
          mes:"注册失败"
        }
    }
   }catch(e){
       console.log(e)
       ctx.body={
           code:4,
           mes:"校验结果错误"
       }
   }
  }

  async login() {
    let {ctx}=this;
    let {phone,pwd}=ctx.request.body;
    if(!phone||!pwd){
        ctx.body={
            code:3,
            mes:"参数不能为空"
        }
        return
    }
   try{
    ctx.validate(createRule)
    let ph=await ctx.service.user.user.getphone(phone)
    console.log(ph,"123")
    if(ph.length===0){
        ctx.body={
            code:2,
            mes:"手机号没有被注册过了，请先注册"
        }
        return
    }

    let res=await ctx.service.user.user.login(phone,ctx.helper.help(pwd))
    console.log(res,"456")
    
    let token= jwt.sign({...res[0]},this.app.config.keys,{expiresIn:"10h"})
    console.log(token,"555555555555555")
    if(res.length>0){
        ctx.body={
            code:1,
            token,
            phone,
            mes:"登录成功"
        }
    }else{
        ctx.body={
          code:0,
          mes:"登录失败"
        }
    }
   }catch(e){
       console.log(e)
       ctx.body={
           code:4,
           mes:"校验结果错误"
       }
   }
  }
}

module.exports = UserController;
