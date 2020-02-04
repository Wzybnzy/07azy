'use strict';

const Controller = require('egg').Controller;

const createRule = {//校验需要下一个包egg-validate
    name: {
      type: 'string',
    },
    pwd: {
      type: 'password',
    }
  };

class UserController extends Controller {
  async registry() {
    let {ctx}=this;
    let {name,pwd}=ctx.request.body;
    console.log(name,pwd,"1111111111111")

    if(!name||!pwd){
        ctx.body={
            code:3,
            mes:"参数不能为空"
        } 
        return
    }

    try{
        ctx.validate(createRule);
        let user=await ctx.service.user.user.getuser(name)
        console.log(user,"22222222222222222")
        if(user.length>0){
             ctx.body={
                 code:2,
                 mes:"用户名已经存在，请重新注册用户名"
             }
             return
        }
    
        //注册
                                            //加密  pwd
        let res=await ctx.service.user.user.registry(name,ctx.helper.help(pwd))
        console.log(res,"注册是否成功")
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
        console.log(e,"555555555555555555")

        ctx.body={
            code:4,
            mes:"参数类型校验失败"
        }
    }
   
  }

  async login(){
      let {ctx}=this;
      let {name,pwd}=ctx.request.body;
    //   console.log(name,pwd,"555555555555")

      if(!name||!pwd){
          ctx.body={
              code:3,
              mes:"参数不能为空"
          }
          return
      }

      //查看用户名是否已经注册过
     let user=await ctx.service.user.user.getuser(name)
      console.log(user,"123456")
      if(user.length===0){
          ctx.body={
              code:2,
              mes:"用户名没有注册过，请先注册在登录"
          }
          return
      }
      
    //登录 
    let res=await ctx.service.user.user.login(name,pwd)

    if(res.length>0){
        ctx.body={
            code:1,
            token:"1111111",
            mes:"登录成功"
        }
    }else{
        ctx.body={
            code:0,
            mes:"登录失败"
        }
    }
  }
}

module.exports = UserController;
