'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
const createRule = {
    phone: {
        type: 'string',
    },
    pwd: {
        type: 'password',

    },
};
class UserController extends Controller {
    async registry() {
        let { ctx } = this;
        let { phone, pwd } = ctx.request.body;
        if (!phone || !pwd) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return;
        }
        try {
            ctx.validate(createRule)
            let data = await ctx.service.user.user.getuser(phone);
            if (data.length > 0) {
                ctx.body = {
                    code: 2,
                    mes: '该用户已经注册过了'
                }
                return;
            }
            let res = await ctx.service.user.user.registry(phone, ctx.helper.help(pwd));
            if (res.affectedRows == 1) {
                ctx.body = {
                    code: 1,
                    mes: '注册成功'
                }
            } else {
                ctx.body = {
                    code: 0,
                    mes: '注册失败'
                }
            }
        } catch (e) {
            console.log(e);
            ctx.body = {
                code: 4,
                mes: "参数类型不正确"
            }
        }

    }
    //登录
    async login(){
        let {ctx}=this;
        let {phone,pwd}=ctx.request.body;
        if (!phone || !pwd) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return;
        }
        try{
            ctx.validate(createRule)
            let user=await ctx.service.user.user.getuser(phone);
            ctx.body=user
            if(user.length==0){
                ctx.body={
                    code:2,
                    mes:'没有该用户'
                }
                return;
            }
            let res=await ctx.service.user.user.login(phone,ctx.helper.help(pwd));
            
            let token=jwt.sign({...res[0]},this.app.config.keys,{expiresIn:'10h'});
            ctx.body=res;
          if(res.length>0){
              ctx.body={
                  code:1,
                  token,
                  uid:res[0].id,
                  mes:'登录成功'
              }
          }else{
            ctx.body={
                code:0,
                mes:'登录失败'
            }
          }
        }catch(e){
            console.log(e);
            ctx.body = {
                code: 4,
                mes: "参数类型不正确"
            }
        }
        

    }
}

module.exports = UserController;
