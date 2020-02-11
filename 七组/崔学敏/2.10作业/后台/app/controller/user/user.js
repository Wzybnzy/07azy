'use strict';

const Controller = require('egg').Controller;
const jwt=require('jsonwebtoken')
const createRule = {
    name: {
        type: 'string'
    },
    pwd: {
        type: 'password'
    },
};
class UserController extends Controller {
    //注册
    async registry() {
        let { ctx } = this;
        let { name, pwd } = ctx.request.body;
        if (!name || !pwd) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return;
        }
        try {
            ctx.validate(createRule);
            let user = await ctx.service.user.user.getuser(name);
            if (user.length > 0) {
                ctx.body = {
                    code: 2,
                    mes: '该用户已经注册过了'
                }
                return;
            }
            let res=await ctx.service.user.user.registry(name,ctx.helper.help(pwd));
            if(res.affectedRows==1){
                ctx.body={
                    code:1,
                    mes:'注册成功'
                }
            }else{
                ctx.body={
                    code:0,
                    mes:'注册失败'
                }
            }
        } catch (e) {
            console.log(e);
            ctx.body = {
                code: 4,
                mes: '参数类型不正确'
            }
        }

    }
//登录
async login(){
    let {ctx}=this;
    let {name,pwd}=ctx.request.body;
    if (!name || !pwd) {
        ctx.body = {
            code: 3,
            mes: '缺少参数'
        }
        return;
    }
    try{
        ctx.validate(createRule);
let data=await ctx.service.user.user.getuser(name);
if(data.length==0){
    ctx.body = {
        code: 2,
        mes: '该用户没有注册，请去注册'
    }
    return;
}
let res=await ctx.service.user.user.login(name,ctx.helper.help(pwd));
let token=jwt.sign({...res[0]},this.app.config.keys,{expiresIn:'10h'})

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
            mes: '参数类型不正确'
        }
    }
}
async getuserinfo(){
    let {ctx}=this;
    let {uid}=ctx.query;
    if(!uid){
        ctx.body={
            code:3,
            mes:'缺少参数'
        }
        return;
    }
    let res=await ctx.service.user.user.getuserinfo(uid);
    ctx.body=res;
}
}

module.exports = UserController;
