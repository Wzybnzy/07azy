'use strict';

const Controller = require('egg').Controller;
let jwt=require("jsonwebtoken")
const createRule = {
    name: {
      type: 'string',
    },
    pwd: {
      type: 'password'
    },
  }
class UserController extends Controller {
  async registry() {
     let {ctx}=this;
     let {name,pwd}=ctx.request.body;
     console.log(name,pwd,"姓名和密码")

     if(!name||!pwd){
         ctx.body={
             code:3,
             mes:"参数不能为空"
         }
         return 
     }

   try{
       
     ctx.validate(createRule);
     let user=await ctx.service.user.user.getname(name)
     console.log(user,"判断用户名是否已经存在")
     if(user.length>0){
         ctx.body={
             code:2,
             mes:"用户名已经存在，请换一个啊"
         }
         return 
     }

     let res=await ctx.service.user.user.registry(name,ctx.helper.help(pwd))
     console.log(res,"用户名和密码")
     if(res.affectedRows===1){
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
   }catch(e){
    ctx.body={
        code:4,
        mes:"参数类型校验失败"
    }
   }
  }

  async login(){
      let {ctx}=this;
      let {name,pwd}=ctx.request.body;
      console.log(name,pwd,"1111")
      if(!name||!pwd){
          ctx.body={
              code:3,
              mes:"参数不能为空"
          }
          return
      }

    try{
        ctx.validate(createRule);
        let user=await ctx.service.user.user.getname(name)
        console.log(user,"211111111111")
        if(user.length===0){
            ctx.body={
                code:2,
                mes:"用户名不存在，请重新注册"
            }
          //   return
        }
  
        let res=await ctx.service.user.user.login(name,ctx.helper.help(pwd))
        let token=jwt.sign({...res[0]},this.app.config.keys,{expiresIn:"10h"})
        console.log(token,"1233")
       console.log(res,"用户名和密码")
       if(res.length>0){
           ctx.body={
               code:1,
               token:token,
               mes:"登录成功"
           }
       }else{
          ctx.body={
              code:0,
              mes:"登录失败"
          }
       }
    }catch(e){
        ctx.body={
            code:4,
            mes:"参数类型校验失败"
        }
       }
   
  }

  async getrole(){
      let {ctx}=this;
      let {uid}=ctx.query;
      //通过id获取角色
      let res=await ctx.service.user.user.getrole(uid)
      console.log(res)
      ctx.body=res
  }
}

module.exports = UserController;
