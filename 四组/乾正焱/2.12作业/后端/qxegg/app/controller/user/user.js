'use strict';

const Controller = require('egg').Controller;
let jwt = require('jsonwebtoken');
class UserController extends Controller {
    // 注册
    async registry() {
        let { ctx } = this;
        let { name, pwd } = ctx.request.body;
        const createRule = {
            name: {
                type: 'string',
            },
            pwd: {
                type: 'password',
            }
        }
        if (!name || !pwd) {
            ctx.body = {
                code: 2,
                msg: "缺少参数！"
            }
            return;
        }
        try {
            ctx.validate(createRule);
            let data = await ctx.service.user.user.getinfo(name);
            if (data.length > 0) {
                ctx.body = {
                    code: 3,
                    msg: "该用户已注册，请换个名字重新注册！"
                }
                return;
            }
            let res = await ctx.service.user.user.registry(name, ctx.helper.help(pwd));
            if (res.affectedRows === 1) {
                ctx.body = {
                    code: 1,
                    msg: "注册成功！"
                }
            } else {
                ctx.body = {
                    code: 0,
                    msg: '注册失败！'
                }
            }
        }
        catch (e) {
            ctx.body = {
                code: 4,
                msg: "参数类型不正确"
            }
        }

    }

    //   登录
    async login() {
        let { ctx } = this;
        let { name, pwd } = ctx.request.body;
        if (!name || !pwd) {
            ctx.body = {
                code: 2,
                msg: "缺少参数！"
            }
            return;
        }
        const createRule = {
            name: {
                type: 'string',
            },
            pwd: {
                type: 'password',
            }
        }
        try {
            ctx.validate(createRule);
            let res = await ctx.service.user.user.login(name, ctx.helper.help(pwd));
            let token = jwt.sign({ ...res[0] }, this.app.config.keys, { expiresIn: "10h" });
            if (res.length > 0) {
                ctx.body = {
                    code: 1,
                    msg: "登录成功！",
                    uid: res[0].id,
                    token
                }
            } else {
                ctx.body = {
                    code: 0,
                    msg: "登录失败！"
                }
            }
        }
        catch (e) {
            ctx.body = {
                code: 4,
                msg: "参数类型不正确！"
            }
        }

    }

    // 获取用户身份信息
    async userrole(){
        let {ctx} = this;
        let {uid} = ctx.request.query;
        if(!uid){
            ctx.body={
                code:2,
                msg:"缺少参数！"
            }
            return ;
        }
        let res = await ctx.service.user.user.userrole(uid);
        if(res.length>0){
            ctx.body={
                code:1,
                msg:"获取用户身份成功！",
                data:res
            }
        }else{
            ctx.body={
                code:0,
                msg:"获取用户身份失败！"
            }
        }
    }

    // 获取用户权限
    async userpower(){
        let {ctx} = this;
        let {uid} = ctx.request.query;
        if(!uid){
            ctx.body={
                code:2,
                msg:"缺少参数！"
            }
            return;
        }
        let res = await ctx.service.user.user.userpower(uid);
        if(res.length>0){
            ctx.body={
                code:1,
                msg:"用户权限获取成功！",
                data:res
            }
        }else{
            ctx.body={
                code:0,
                msg:"用户权限获取失败！"
            }
        }
    }
}

module.exports = UserController;
