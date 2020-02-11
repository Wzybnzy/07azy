'use strict';

const Controller = require('egg').Controller;
const jwt = require("jsonwebtoken")
const createRule = {
    
     name:{
         type:"string",
     },
     pwd:{
         type:"password"
     }
}
class UserController extends Controller {
    //注册
  async registry() {
        let { ctx } = this 
        //第一步获取用户参数
        let { name,pwd } = ctx.request.body
        if(!name||!pwd){
            ctx.body = {
                code:3,
                mes:"注册缺少参数"
            }
        }
        // console.log(name,pwd);
        
        try{
            ctx.validate(createRule)
            
        // //第二部判断用户是否已存在
        let user = await ctx.service.user.user.getuser(name)
        if(user.length>0){
            ctx.body = {
                code:2,
                mes:'该用户名已经被注册'
            }
            return
        }
        // //第三步第二部判断用户是否不存在
        let res = await ctx.service.user.user.registry(name,ctx.helper.help(pwd))
        console.log(res);
        if(res.affectedRows==1){
            ctx.body = {
                code:1,
                mes:"注册成功"
            }
        }else{
            ctx.body = {
                code:0,
                mes:"注册失败"
            }
        }
      
    } catch (e){
            console.log(e,"sssss");
            ctx.body = {
                code:4,
                mes:'参数类型校验失败.registry'
                }
    }    
  }

  //登录
  async login(){
      let {ctx} = this
       //第一步获取用户参数
       let { name,pwd } = ctx.request.body
       if(!name||!pwd){
           ctx.body = {
               code:3,
               mes:"注册缺少参数"
           }
       }
       //
       try{
        ctx.validate(createRule)            
        //判断用户是否已存在
        let user = await ctx.service.user.user.getuser(name)
        // console.log();
        
        if(user.length == 0) {
            ctx.body = {
                code:2,
                mes:"该用户还没有注册，请先注册"
            }
            return
        }
        //登录
        let res = await ctx.service.user.user.login(name,ctx.helper.help(pwd))
        // const token = jwt.sign({...res[0]},this.app.config.keys,{expiresIn:"10h"})
        const token = jwt.sign({...res[0]},this.app.config.keys,{expiresIn:'10h'});
        if(res.length>0){
            ctx.body = {
                code:1,
                token,
                uid:res[0].id,
                res,
                mes:"登录成功"
            }
        }else{
            ctx.body = {
                code:0,
                mes:"登录失败"
            }
        }

       } catch(e){
           console.log(e,"login--");
           ctx.body = {
            code:4,
            mes:'参数类型校验失败.login'
            }
       }
  }

 async getuserinfo(){
      let {ctx} = this
      let {uid} = ctx.query
      //通过用户id来获取角色
      let res = await ctx.service.user.user.getuserinfo(uid)
      ctx.body = {
          code:1,
          name:res[0].r_name
      }
  }
  async getlist(){
      let {ctx} = this
      let {uid} = ctx.query//用户的id
      if(uid){
          ctx.body = {
              code:3,
              mes:"缺少参数"
          }
          return
      }
      let res = await ctx.service.user.user.getlist(uid)
      if(res.length>0){
          ctx.body = {
              code:1,
              data:res
          }
      }else{
          ctx.body={
              code:0,
              mes:"失败"
          }
      }
  }
}

module.exports = UserController;
