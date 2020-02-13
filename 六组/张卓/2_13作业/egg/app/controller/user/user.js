'use strict';

const Controller = require('egg').Controller;
const jwt = require("jsonwebtoken")

class  UserController extends Controller {
    //注册
  async registry() {
    const { ctx } = this;
    let {phone,pwd} = ctx.request.body
    if(!phone||!pwd){
        ctx.body = {
            code:2,
            mgs:"注册缺少参数"
        }
        return
    }
    //判断该用户是否已注册
    let user = await ctx.service.user.user.getuser(phone);
    console.log(user);
    
    if (!user) {
        ctx.body = {
            code: 3,
            mgs: '该用户已经注册过了'
        }
        return;
    }
 
     let res = await ctx.service.user.user.registry(phone,ctx.helper.help(pwd))

     if(res.affectedRows === 1 ){
         ctx.body = {
             code:1,
             mgs:"注册成功"
         }
     }else{
         ctx.body = {
             code:0,
             mgs:"注册失败"
         }
     }
 
    }

    //登录
    async login(){
        let {ctx} = this
        let {phone,pwd} = ctx.request.body
        if(!phone||!pwd){
            ctx.body = {
                code:2,
                mgs:"注册缺少参数"
            }
            return
        }
      //判断当前登录的用户是否注册过
        let user =  await ctx.service.user.user.getuser(phone)
        if(!user){
            ctx.body = {
                code:3,
                mgs:"该用户还没注册过了"
            }
            return
        }
        //登录
        let res = await ctx.service.user.user.login(phone,ctx.helper.help(pwd))
        let token = jwt.sign({...res[0]},this.app.config.keys,{expiresIn:'10h'})
        if(res.length>0){
            ctx.body = {
                code:1,
                token,
                uid:res[0].id,
                mgs:"登录成功"
            }
        }else{
            ctx.body = {
                code:0,
                mgs:"登录失败"
            }
        }
    }

   
}

module.exports =  UserController;
