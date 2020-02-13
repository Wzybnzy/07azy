'use strict';

const Controller = require('egg').Controller;
const jwt=require('jsonwebtoken');
class UserController extends Controller {
  async registry() {
    let {ctx}=this;
    let {phone,pwd}=ctx.request.body;
    //非空校验
    if(!phone||!pwd){
      ctx.body={
        code:2,
        msg:'缺少参数'
      }
      return;
    }
    //判断手机号是否已经注册过
    let user=await ctx.service.user.user.getuser(phone);
    if(user.length>0){
     ctx.body={
       code:3,
       msg:'该用户已经注册过了'
     }
     return;
    }
    let res=await ctx.service.user.user.registry(phone,ctx.helper.help(pwd));
    if(res.affectedRows===1){
      ctx.body={
        code:1,
        msg:'注册成功'
      }
    }else{
      ctx.body={
        code:0,
        msg:'注册失败'
      }
    }
  }
  async login(){
    let {ctx}=this;
    let {phone,pwd}=ctx.request.body;
    if(!phone||!pwd){
      ctx.body={
        code:2,
        msg:'缺少参数'
      }
      return;
    }
    //判断当前登录的用户是否注册过
    let user=await ctx.service.user.user.getuser(phone);
    if(user.length===0){
      ctx.body={
        code:3,
        msg:'该用户还没有注册过'
      }
      return;
    }
    let res=await ctx.service.user.user.login(phone,pwd);
    let token=jwt.sign({...res[0]},this.app.config.keys,{expiresIn:"10h"});
    if(res.length>0){
      ctx.body={
        code:1,
        token,
        uid:res[0].id,
        msg:'登陆成功'
      }
    }else{
      ctx.body={
        code:0,
        msg:'登陆失败'
      }
    }
  }
}

module.exports = UserController;
