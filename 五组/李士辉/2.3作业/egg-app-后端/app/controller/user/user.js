'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken')

// const createRule = {
//     name: {
//       type: 'email'
//     },
//     pwd: {
//       type: 'password'
//     //   compare: 're-password',
//     },
// };

class UserController extends Controller {
  async login() {
    const {ctx} = this;
    // ctx.validate(createRule);
    let {name,pwd} = ctx.request.body;
    if(!name || !pwd){
        ctx.body = {
            code:0,
            msg:'缺少参数'
        }
    }else{
        let data = await ctx.service.user.user.getUser(name);
        if(data.length == 0){
            ctx.body = {
                code:0,
                msg:'没有该用户'
            }
        }else{
            let res = await ctx.service.user.user.login(name,ctx.helper.help(pwd));
            let token = jwt.sign({...res[0]},this.app.config.keys,{expiresIn:'12h'})
            if(res.length > 0){
                ctx.body = {
                    code:1,
                    token,
                    uid:res[0].id,
                    msg:'登陆成功!'
                }
            }else{
                ctx.body = {
                    code:0,
                    msg:'密码错误!'
                }
            }
        }
    }
  }
  async registry(){
    const {ctx} = this;
    let {name,pwd} = ctx.request.body;
    if(!name || !pwd){
        ctx.body = {
            code:0,
            msg:'缺少参数'
        }
    }else{
        let data = await ctx.service.user.user.getUser(name);
        if(data.length > 0){
            ctx.body = {
                code:0,
                msg:'该用户已存在'
            }
        }else{
            let res = await ctx.service.user.user.registry(name,ctx.helper.help(pwd));
            if(res.affectedRows == 1){
                ctx.body = {
                    code:1,
                    msg:'注册成功!'
                }
            }else{
                ctx.body = {
                    code:0,
                    msg:'注册失败!'
                }
            }
        }
    }
  }
}

module.exports = UserController;
