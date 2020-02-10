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
  }
class UserController extends Controller {
  async register() {//注册
    let {ctx}=this;
    let {name,pwd}=ctx.request.body;
    if(!name||!pwd){
        ctx.body={
            code:4,
            msg:"缺少参数"
        }
        return;
    }
    try{
        ctx.validate(createRule);
        //该用户是否存在
        let user=await ctx.service.user.user.getuser(name)
        ctx.body=user;
        if(user.length==0){//不存在
            let res=await ctx.service.user.user.register(name,ctx.helper.help(pwd))
            if(res.affectedRows==1){
              ctx.body={
                code:1,
                msg:"注册成功"
              }
            }else{
              ctx.body={
                code:0,
                msg:"注册失败"
              }
            }
        }else{//存在
            ctx.body={
                code:2,
                msg:"该用户已存在，请登录"
            }
        }
    }catch(e){
        console.log(e.errors);
    }   
  }
  async login(){//登录
    let {ctx}=this;
    let {name,pwd}=ctx.request.body;
    if(!name||!pwd){
        ctx.body={
            code:4,
            msg:"缺少参数"
        }
        return;
    }
    //判断是否有该用户
    let user=await ctx.service.user.user.getuser(name)
    if(user.length==0){//没有该用户，注册
      ctx.body={
        code:2,
        msg:"没有该用户，请去注册"
      }
    }else{
      let res=await ctx.service.user.user.login(name,ctx.helper.help(pwd))
      let token=jwt.sign({...res[0]},this.app.config.keys,{expiresIn:'12h'})
      if(res.length>0){//登录成功
        ctx.body={
          code:1,
          msg:"登录成功",
          token,
          uid:res[0].id
        }
      }else{
        ctx.body={
          code:0,
          msg:"登录失败"
        }
      }
    }
  }
}

module.exports = UserController;
