'use strict';

const Controller = require('egg').Controller;
const createVid = {
    stu:'string',
    pwd:{
        type:'password',
        required:true
    }
}
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
class UserController extends Controller {
  async login() {
    const { ctx } = this;
    let {stu,pwd} = ctx.request.body
    if(!stu || !pwd){
        ctx.body = {
            code:3,
            mes:'缺少参数'
        }
        return 
    }
    try{
        ctx.validate(createVid)
        let data = await ctx.service.user.user.getuser(stu)
        if(data.length == 0){
            ctx.body = {
                code:2,
                mes:'该用户没有注册'
            }
        }else{
            let res = await ctx.service.user.user.login(stu,ctx.helper.helpr(pwd))
            console.log(res)
            let token = jwt.sign({...res[0]},this.app.config.keys,{expiresIn:'6h'})
            if(res.length > 0){
                ctx.body = {
                    code:1,
                    token,
                    mes:'登录成功'
                }
            }else{
                ctx.body = {
                    code:0,
                    mes:'登陆失败'
                }
            }
        }
    }
    catch(e){
         console.log(e.errors)
         ctx.body = {
             code:4,
             mes:'参数类型不正确'
         }
    }
    ctx.body = 'hi, egg';
  }
  async register(){
      let { ctx } = this
      let {name,stu,pwd} = ctx.request
      if(!name || !stu || !pwd){
        ctx.body = {
            code:3,
            mes:'缺少参数'
        }
        return
      }
      try {
            ctx.validate(createVid)
            let data = await ctx.service.user.user.getuser(stu)
            if(data.length == 0){
                let res = await ctx.service.user.user.register(name,ctx.helper.help(pwd),stu)
                if(res.affectedRows == 1){
                    ctx.body = {
                        code:1,
                        mes:'注册成功'
                    }
                }else{
                    ctx.body = {
                        code:0,
                        mes:'注册失败'
                    }
                }
            }else{
                ctx.helper.ctxBoder(ctx,{
                    code:2,
                    mes:'该用户已经注册'
                })
            }

      }catch(e){
        ctx.body = {
            code:4,
            mes:'参数类型不正确'
        }
      }
  }
}

module.exports = UserController;
