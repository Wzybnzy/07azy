'use strict';

const Controller = require('egg').Controller;
const jwt=require("jsonwebtoken")
class UserController extends Controller {
  async registry() {
    let {ctx}=this
    let {name,pwd}=ctx.request.body
    if(!name||!pwd){
       ctx.body={
         code:4,
         mes:"缺少参数"
       }
       return
    }
    let user=await ctx.service.user.user.getuser(name)
    if(user.length>0){
      ctx.body={
        code:3,
        mes:"注册过了"
      }
      return
    }
    let res=await ctx.service.user.user.registry(name,ctx.helper.help(pwd))
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
  async login(){
    let {ctx}=this
    let {name,pwd}=ctx.request.body
    if(!name||!pwd){
       ctx.body={
         code:4,
         mes:"缺少参数"
       }
       return
    }
    let user=await ctx.service.user.user.getuser(name)
    if(user.length==0){
      ctx.body={
        code:2,
        mes:"用户不存在，请注册"
      }
      return
    }
    let res=await ctx.service.user.user.login(name,ctx.helper.help(pwd))
    let token=jwt.sign({...res[0]},this.app.config.keys,{expiresIn:'10h'})
    if(res.length>0){
       ctx.body={
         code:1,
         token,
         uid:res[0].id,
         mes:"登陆成功"
       }
    }else{
      ctx.body={
        code:0,
        mes:"登陆失败"
      }
    }
  }
 
}

module.exports = UserController;
