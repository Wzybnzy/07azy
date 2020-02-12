'use strict';

const Controller = require('egg').Controller;
const createRule = {
  phone: {
    type: 'string',
  },
  pwd: {
    type: 'password',
  },
};
class UserController extends Controller {
  async register() {
    let {ctx}=this
    let {phone,pwd}=ctx.request.body

    if(!phone||!pwd){
      ctx.body={
        code:2,
        msg:"缺少参数"
      }
      return ;
    }

    try {
      ctx.validate(createRule)

      let res=await ctx.service.user.user.ishave(phone)
      if(res){
        ctx.body={
          code:4,
          msg:"该用户已存在，请登录"
        }
      }else{
        // console.log(ctx.helper.encryption(pwd))
        let res=await ctx.service.user.user.register(phone,ctx.helper.encryption(pwd))
        // console.log(res)
        if(res.affectedRows===1){
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

    } catch (error) {
      ctx.body={
        code:3,
        msg:"格式错误"
      }
    }
   
  }

  async login(){
    let {ctx}=this
    let {phone,pwd}=ctx.request.body
    if(!phone||!pwd){
      ctx.body={
        code:2,
        msg:"缺少参数"
      }
      return ;
    }

    try {
      ctx.validate(createRule)

      let res=await ctx.service.user.user.ishave(phone)
      if(!res){
        ctx.body={
          code:4,
          msg:"该用户不存在，请注册"
        }
      }else{
        let res=await ctx.service.user.user.login(phone,ctx.helper.encryption(pwd))
        if(res){
          ctx.body={
            code:1,
            msg:"登陆成功"
          }
        }else{
          ctx.body={
            code:0,
            msg:"登陆失败"
          }
        }
      }
    } catch (error) {
      ctx.body={
        code:3,
        msg:"格式错误"
      }
    }
  }

  async add(){
    let {ctx}=this
    let {uname,phone,label,role,idCard,address,follow,company}=ctx.request.body
    if(!uname||!phone||!label||!role||!idCard||!address||!follow||!company){
      ctx.body={
        code:2,
        msg:"缺少参数"
      }
      return ;
    }
    let time=new Date().toLocaleDateString()+","+new Date().toLocaleTimeString()
    console.log(time)
    let res=await ctx.service.user.user.add(uname,phone,label,role,idCard,address,follow,company,time)
    if(res.affectedRows===1){
      ctx.body={
        code:1,
        msg:"添加成功"
      }
    }else{
      ctx.body={
        code:0,
        msg:"添加失败"
      }
    }
    
  }
}

module.exports = UserController;
