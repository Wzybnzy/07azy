'use strict';

const Controller = require('egg').Controller;
const jwt=require('jsonwebtoken');
const createRule = {
  name: {
    type: 'string',
  },
  pwd: {
    type: 'password',
  },
};
class UserController extends Controller {
  async registry() {
    let {ctx}=this;
    let {name,pwd}=ctx.request.body;
    if(!name||!pwd){
      ctx.body={
        code:3,
        msg:'缺少参数'
      }
      return;
    }
    //捕获异常
    try{
      //校验参数
      ctx.validate(createRule);

     //判断当前用户名是否已经注册过了
    let user=await ctx.service.user.user.getuser(name);
    if(user.length>0){
      ctx.body={
        code:2,
        msg:'该用户名已经注册过'
      }
      return;
    }
    //如果没有注册再去注册
   let res=await ctx.service.user.user.registry(name,ctx.helper.help(pwd));
   if(res.affectedRows==1){
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

    }catch(e){
      console.log(e,'1111');
      ctx.body={
        code:4,
        msg:'参数类型校验失败'
      }
    }
  }
  async login(){
    let {ctx}=this;
    let {name,pwd}=ctx.request.body;
    if(!name||!pwd){
      ctx.body={
        code:3,
        msg:'缺少参数'
      }
      return;
    }
    try{
   //校验参数
    ctx.validate(createRule);
    //先判断用户是否存在
    let user=await ctx.service.user.user.getuser(name);
     if(user.length==0){
       ctx.body={
         code:2,
         msg:'该用户还没有注册过，请先注册'
       }
       return;

     }
     //登录
    let res=await ctx.service.user.user.login(name,ctx.helper.help(pwd));
    const token=jwt.sign({...res[0]},this.app.config.keys,{expiresIn:'10h'});
    if(res.length>0){
      ctx.body={
        code:1,
        token,  //签名
        uid:res[0].id,
        msg:'登录成功'
      }
    }else{
      ctx.body={
        code:0,
        msg:'登录失败'
      }
    }

    }catch(e){
     ctx.body={
       code:4,
       msg:'参数类型校验失败'
     }
    }
  }
  async getuserinfo(){
    let {ctx}=this;
    let {uid}=ctx.query;
    //通过用户id来获取角色
    let res=await ctx.service.user.user.getuserinfo(uid);
    ctx.body={
      code:1,
      name:res[0].r_name
    }
  }
  async getlist(){
    let {ctx}=this;
    let {uid}=ctx.query;
    if(!uid){
      ctx.body={
        code:3,
        msg:'缺少参数'
      }
      return;
    }
  let res=await ctx.service.user.user.getlist(uid);
  if(res.length>0){
    ctx.body={
      code:1,
      data:res
    }
  }else{
    ctx.body={
      code:0,
      msg:'失败'
    }
  }
  }
}

module.exports = UserController;
