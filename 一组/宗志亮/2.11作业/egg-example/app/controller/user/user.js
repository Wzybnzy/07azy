'use strict';

const Controller = require('egg').Controller;
const jwt=require('jsonwebtoken');
const createRule = {
    name:'string',
    pwd: {
      type: 'password',
    }
  };

class UserController extends Controller {
  async registry(){
      let {ctx}=this;
      let {name,pwd}=ctx.request.body;
      if(!name||!pwd){
          ctx.body={
              code:3,
              msg:'缺少参数'
          }
          return;
      }
       let data=await ctx.service.user.user.getuser(name);
        if(data.length>0){
            ctx.body={
                code:2,
                msg:'该用户已存在，请去登录'
            }
            return;
        }
      try{
        ctx.validate(createRule);
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
          ctx.body={
              code:4,
              msg:'类型校验错误'
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
    let data=await ctx.service.user.user.getuser(name);
    if(data.length==0){
        ctx.body={
            code:2,
            msg:'该用户不存在,请先注册'
        }
        return;
    }
    let res=await ctx.service.user.user.login(name,ctx.helper.help(pwd));
    // console.log(res)
    let token=jwt.sign({...res[0]},this.app.config.keys,{expiresIn:'12h'});
    if(res.length>0){
        ctx.body={
            code:1,
            msg:'登陆成功',
            token:token,
            uid:res[0].id
        }
    }else{
        ctx.body={
            code:0,
            msg:'登陆失败'
        }
    }
  }
  async userinfo(){
      let {ctx}=this;
      let {uid}=ctx.request.body;
      if(!uid){
          ctx.body={
              code:3,
              msg:'缺少参数'
          }
          return;
      }
      let res=await ctx.service.user.user.userinfo(uid);
    //   console.log(res)
    if(res.length>0){
        ctx.body={
            code:1,
            msg:'获取身份成功',
            userinfo:res[0].work
        }
    }else{
        ctx.body={
            code:0,
            msg:'获取身份失败'
        }
    }
    
  }
  async userpower(){
      let {ctx}=this;
      let {uid}=ctx.request.body;
      if(!uid){
          ctx.body={
              code:3,
              msg:'缺少参数'
          }
          return;
      }
      let res=await ctx.service.user.user.userpower(uid);
    //   console.log(res)
    if(res.length>0){
        ctx.body={
            code:1,
            msg:'获取权限成功',
            userpower:res
        }
    }else{
        ctx.body={
            code:0,
            msg:'获取权限失败'
        }
    }
  }
}

module.exports = UserController;