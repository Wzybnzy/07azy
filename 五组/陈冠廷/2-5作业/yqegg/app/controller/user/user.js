'use strict';

const Controller = require('egg').Controller;
const jwt=require('jsonwebtoken');
class UserController extends Controller {
  async registry() {
    const { ctx } = this;
    let {name,pwd}=ctx.request.body;
    if(!name||!pwd){
        ctx.body={
            code:3,
            msg:'缺少参数'
        }
        return;
    }
    let data=await ctx.service.user.getuser(name);
    if(data.length!==0){
        ctx.body={
            code:0,
            msg:'注册失败，该用户已存在'
        }
    }else{
        let res=await ctx.service.user.registry(name,ctx.helper.help(pwd));
        // ctx.body=res;
        if(res.affectedRows==1){
            ctx.body={
                code:1,
                msg:'注册成功'
            }
        }else{
            ctx.body={
                code:2,
                msg:'注册失败'
            }
        }
    }
  }
  async login(){
      let {ctx}=this;
      let {name,pwd,uid}=ctx.request.body;
      if(!name||!pwd){
        ctx.body={
            code:3,
            msg:'缺少参数'
        }
        return;
    }
      let data=await ctx.service.user.getuser(name);
      if(data.length==0){
          ctx.body={
            code:0,
            msg:'登陆失败，该用户名不存在'
          }
          return;
      }
       let res=await ctx.service.user.login(name,ctx.helper.help(pwd));
       let token=jwt.sign({...res[0]},this.app.config.keys,{expiresIn:'3h'});
       console.log(res,"0000")
       if(res.length>0){
      
        ctx.body={
            code:1,
            msg:'登录成功',
            data:{
                token:token,
                uid:res[0].id,
                name:name
            }
        }
        }else{
            ctx.body={
                code:2,
                msg:'登录失败'
            }
        }

  }

}

module.exports = UserController;