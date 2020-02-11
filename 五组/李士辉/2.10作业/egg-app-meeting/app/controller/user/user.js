'use strict';

const Controller = require('egg').Controller;
const jwt=require('jsonwebtoken')
const createRule = {
    name: {
        type: 'string',
    },
    pwd: {
        type: 'password',
    },
};
class UserController extends Controller {
    async registry() {
        const { ctx } = this;
        let { name, pwd } = ctx.request.body;
        if (!name || !pwd) {
            ctx.body = {
                code: 4,
                msg: '缺少参数'
            }
        } else {
            try{
                //类型校验
                ctx.validate(createRule)
                //判断该用户是否存在
                let data = await ctx.service.user.user.getUser(name);
                if (data.length !== 0) {
                    ctx.body = {
                        code: 0,
                        msg: '该用户已存在'
                    }
                } else {
                    let res = await ctx.service.user.user.registry(name, ctx.helper.help(pwd));
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
                }
            }catch(e){
                console.log(e,"EEEEEE")
                ctx.body={
                    code:3,
                    msg:"类型校验失败"
                }
            }
        }
    }
    async login() {
        const { ctx } = this;
        let { name, pwd } = ctx.request.body;
        if (!name || !pwd) {
            ctx.body = {
                code: 4,
                msg: '缺少参数'
            }
        } else {
            let data = await ctx.service.user.user.getUser(name);
            if (data.length > 0) {
                let res = await ctx.service.user.user.login(name, ctx.helper.help(pwd));
                let token=jwt.sign({...res[0]},this.app.config.keys,{expiresIn:"10h"})
                if(res.length>0){
                    ctx.body={
                        code:1,
                        token,
                        uid:res[0].id,
                        msg:"登陆成功"
                    }
                }else{
                    ctx.body={
                        code:0,
                        msg:"登陆失败"
                    }
                } 
            } else {
                ctx.body = {
                    code: 0,
                    msg: '该用户不存在请先去注册'
                }
            }
        }
    }
    async getuserinfo(){//用户身份
        let {ctx}=this;
        let {uid}=ctx.query
        if(!uid){
            ctx.body={
                code:4,
                msg:"缺少参数"
            }
        }else{
            let res=await ctx.service.user.user.getuserinfo(uid)
            ctx.body=res[0];
            // if(res.length!=0){//查到该用户
            //     ctx.body={
            //         code:1,
            //         msg:""
            //     }
            // }
        }
    }
}

module.exports = UserController;
