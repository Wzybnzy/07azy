'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken')
const createRule = { //校验检测    对
    name:{
        type:"string"
    },
    pwd:{
        type:"password"
    }
}
class UserController extends Controller {
    //注册
  async registry() {
    const { ctx } = this;
    let {name,pwd} = ctx.request.body 
    //判断参数是否为空
    if(!name || !pwd) {
        ctx.body = {
            code:3,
            mes:"缺少参数"
        }
        return
    } 
    try{
       
        ctx.validate(createRule)
        //判断当时用户名是否注册过
        let user = await ctx.service.user.user.getuser(name)
        if(user.length!==0){//判断有这个人
            ctx.body = {
                code:2,
                mes:"该用户名已经注册过了"
            }
            return
        }
        
        //加密
        // let res = await ctx.service.user.user.registry(name,ctx.helper.help(pwd))
        // let res = await ctx.service.user.user.registry(name,ctx.helper.help(pwd)); 

    let res = await ctx.service.user.user.registry(name,ctx.helper.help(pwd));
   
        if(res.affectedRows == 1){
            // 这个就是use，算了，你说吧，你的安全防范是啥样的直接是false吗？
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
     console.log(e);
     ctx.body = {
         code:4,
         mes:"参数类型校验失败"
     }
    }
  
  }

  //登录
  async login(){
      let {ctx} = this
      let {name,pwd} = ctx.request.body
      if(!name||!pwd){
          ctx.body = {
              code:3,
              mes:"缺少参数"
          }
          return
      }
      //判断当前用户名是否注册过
      let user = await ctx.service.user.user.getuser(name)
      if(user.length ==0 ){
          ctx.body = {
              code:2,
              mes:"该用户名还没有注册过"
          }
          return
      }

      let res = await ctx.service.user.user.login(name,ctx.helper.help(pwd))
      let token = jwt.sign({...res[0]},this.app.config.keys,{expiresIn:'10h'})
      if(res.length>0){
          ctx.body = {
              code:1,
              token,
              data:res,
              uid:res[0].id,
              mes:'登录成功'
          }
      }else{
          ctx.body = {
              code:0,
              mes:"登录失败"
          }
      }
   }

   
}

module.exports = UserController;
