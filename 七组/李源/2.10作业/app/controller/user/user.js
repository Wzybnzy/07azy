'use strict';

const Controller = require('egg').Controller;
const jwt = require("jsonwebtoken")
const createRule = {
  name: {
    type: 'string',
  },
  password: {
    type: 'password',
  }
}
class UserController extends Controller {
  async login() {
    const {ctx}=this;
    let {name,pwd}=ctx.request.body;

    // 非空验证
    if(!name ||!pwd){
        ctx.body={
            code:4,
            mes:"缺少参数"
        }
        return;
    }

    // 判断当前用户是否已经注册
    let data=await ctx.service.user.user.getuser(name);
    if(data.length==0){
        ctx.body={
            code:2,
            mes:"当前用户不存在，请注册"
        }
        return;
    }

    // 验证用户名，密码是否正确
    let res=await ctx.service.user.user.login(name,ctx.helper.help(pwd));
    let token=jwt.sign({...res[0]},this.app.config.keys,{expiresIn:'10h'})
    if (res.length > 0) {
        ctx.body = {
            code: 1,
            mes: "登录成功"
        }
    } else {
        ctx.body = {
            code: 0,
            mes: "登录失败"
        }
    }
  }
  async registry(){
      const {ctx}=this;

      let {name,pwd}=ctx.request.body;
    
    // 非空验证
    if(!name ||!pwd){
        ctx.body={
            code:4,
            mes:"缺少参数"
        }
        return;
    }

    // 判断当前用户是否存在
    let data = await ctx.service.user.user.getuser(name);
    if (data.length > 0) {
        ctx.body = {
            code: 2,
            mes: "该用户已存在，请登录"
        }
        return;
    }
    // 注册
    let res = await ctx.service.user.user.registry(name, ctx.helper.help(pwd));
    if (res.affectedRows == 1) {
        ctx.body = {
            code: 1,
            mes: "注册成功"
        }
    } else {
        ctx.body = {
            code: 0,
            mes: "注册失败"
        }
    }
  }
}

module.exports = UserController;