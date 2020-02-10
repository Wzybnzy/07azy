'use strict';

const Controller = require('egg').Controller;
const jwt =require('jsonwebtoken')
const createRule = {
    name: {
        type: 'string',
    },
    pwd: {
        type: 'password',
    },
};
class UserController extends Controller {
    async register() { //注册
        let {ctx} = this;
        let {name, pwd} = ctx.request.body
        if (!name || !pwd) {
            ctx.body = {
                code: 4,
                msg: "缺少参数"
            }
            return;
        }
        try {
            //参数格式校验
            ctx.validate(createRule)
            //判断该用户是否存在
            let user = await ctx.service.user.user.getuser(name)
            if (user.length == 0) { //没有该用户
                let res = await ctx.service.user.user.register(name, ctx.helper.help(pwd))
                if(res.affectedRows==1){
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
                
            }else{
                ctx.body={
                    code:2,
                    msg:"该用户已存在，请去注册"
                }
            }
        } catch (e) {
            console.log(e,"eeeeeeeeeeeeee");
            ctx.body = {
                code: 3,
                msg: "参数类型校验失败"
            }
        }
    }
    async login(){//登录
        let {ctx}=this;
        let {name,pwd}=ctx.request.body
        if(!name||!pwd){
            ctx.body={
                code:4,
                msg:"缺少参数"
            }
            return;
        }
        try{
            //参数校验
            ctx.validate(createRule)
            //判断有没有该用户
            let user=await ctx.service.user.user.getuser(name)
            if(user.length==0){//该用户没有存在
                ctx.body={
                    code:2,
                    msg:"没有该用户，请去注册"
                }
            }else{//该用户已存在 登录
                let res=await ctx.service.user.user.login(name,ctx.helper.help(pwd))
                let token=jwt.sign({...res[0]},this.app.config.keys,{expiresIn:"10h"})
                if(res.length>0){
                    ctx.body={
                        code:1,
                        token,
                        uid:res[0].id,
                        msg:"登录成功"
                    }
                }else{
                    ctx.body={
                        code:0,
                        msg:"登录失败"
                    }
                }
            }
            
        }catch(e){
            console.log(e);
            ctx.body={
                code:3,
                msg:"参数类型校验失败"
            }
        }
    }

    async getuserinfo(){//用户身份
        let {ctx}=this;
        let {uid}=ctx.query;
        if(!uid){
            ctx.body={
                code:4,
                msg:"缺少参数"
            }
            return;
        }
        let res=await ctx.service.user.user.getuserinfo(uid)
        ctx.body=res[0];
    }
}

module.exports = UserController;