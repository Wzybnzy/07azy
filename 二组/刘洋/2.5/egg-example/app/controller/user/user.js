'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
const createRule = {
  name: {
    type: 'string',
  },
  pwd: {
    type: 'password',
  },
}
class UserController extends Controller {
  async login() {
    let {ctx}=this
    let {name,pwd}=ctx.request.body
    if(!name||!pwd){
      ctx.body={
        code:2,
        msg:"缺少必要参数"
      }
      return ;
    }

    try {
      console.log(name,pwd)
      ctx.validate(createRule);
  
      let ishave=await ctx.service.user.user.ishave(name,ctx.helper.encryption(pwd))
      if(ishave.length>0){
        let res=await ctx.service.user.user.login(name,ctx.helper.encryption(pwd))
        if(res.length>0){
          ctx.body={
            code:1,
            token:jwt.sign({...res[0]},ctx.app.config.keys,{expiresIn:'10h'}),
            msg:"登录成功",
            uid:res[0].id,
            name:res[0].name,
          }
        }else{
          ctx.body={
            code:0,
            msg:"登录失败"
          }
        }
       
      }else{
        ctx.body={
          code:3,
          msg:"没有此用户，请注册"
        }
      }
      
    } catch (e) {
      console.log(e)
      ctx.body={
        code:4,
        msg:"格式错误"
      }
    }
    
   
  }
  async register() {
    let {ctx}=this
    let {name,pwd}=ctx.request.body
    if(!name||!pwd){
      ctx.body={
        code:2,
        msg:"缺少必要参数"
      }
      return ;
    }

    try {
      ctx.validate(createRule);


      let ishave=await ctx.service.user.user.ishave(name,ctx.helper.encryption(pwd))
      if(ishave.length>0){
        ctx.body={
          code:3,
          msg:"此用户已存在，请登陆"
        }
      }else{
        let res=await ctx.service.user.user.register(name,ctx.helper.encryption(pwd))
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
      }

    } catch (e) {
      console.log(e)
      ctx.body={
        code:4,
        msg:"格式错误"
      }
    }
   
  }

  async getuser(){
    let {ctx}=this
    let {uid}=ctx.request.body
    if(!uid){
      ctx.body={
        code:2,
        msg:"缺少必要参数"
      }
      return ;
    }
    let res=await ctx.service.user.user.getuser(uid)
    ctx.body={
      code:1,
      data:res[0].name
    }
  }
}

module.exports = UserController;
