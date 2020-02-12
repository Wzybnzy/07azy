'use strict';

const Controller = require('egg').Controller;
const jwt=require("jsonwebtoken")
const createRule = {
  name: {
    type: 'string',
  },
  pwd: {
    type: 'password',
  },
};
class UserController extends Controller {
  async register() {
    const {ctx}=this
    const {name,pwd}=ctx.request.body
    if(!name||!pwd){
      ctx.body={
        code:2,
        msg:"缺少必要参数"
      }
      return ;
    }

    try {

      ctx.validate(createRule);

      let res=await ctx.service.user.user.ishave(name)
      if(res.length>0){
        ctx.body={
          code:4,
          msg:"该用户已存在"
        }
      }else{
        ctx.helper.cryp(pwd)
        let res=await ctx.service.user.user.register(name,ctx.helper.cryp(pwd))
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
        code:3,
        msg:"格式错误"
      }
    }
    

  }

  async login(){
    const {ctx}=this
    const {name,pwd}=ctx.request.body
    if(!name||!pwd){
      ctx.body={
        code:2,
        msg:"缺少必要参数"
      }
      return ;
    }

    try {

      ctx.validate(createRule);

      let res=await ctx.service.user.user.ishave(name)
      if(res.length=0){
        ctx.body={
          code:4,
          msg:"该用户不存在，请注册"
        }
      }else{
        let res=await ctx.service.user.user.login(name,ctx.helper.cryp(pwd))
        console.log(res)
        if(res.length>0){
          ctx.body={
            code:1,
            msg:"登陆成功",
            data:{
              uid:res[0].id,
              name:res[0].name,
              statu:res[0].statu,
              token:jwt.sign({...res[0]}, ctx.app.config.keys, {expiresIn:"6h"})
            }
          }
        }else{
          ctx.body={
            code:0,
            msg:"登陆失败"
          }
        }
      }
    } catch (e) {
      console.log(e)
      ctx.body={
        code:3,
        msg:"格式验证失败"
      }
    }

  }

  async statu(){
    const {ctx}=this
    const {statu_id}=ctx.request.body
    let res=await ctx.service.user.user.statu(statu_id)
    ctx.body={
      code:1,
      data:res
    }
  }
}

module.exports = UserController;
