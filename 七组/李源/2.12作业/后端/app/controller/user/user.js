'use strict';

const Controller = require('egg').Controller;
const createRule = {
    name: {
        type: 'string',
    },
    pwd: {
        type: 'password',
    }
};
const jwt = require("jsonwebtoken");
class UserController extends Controller {
    async login() {
        const { ctx } = this;
        let { name, pwd } = ctx.request.body;
        if (!name || !pwd) {
            ctx.body = {
                code: 2,
                mes: "缺少参数"
            }
            return;
        }

        try {
            ctx.validate(createRule);
            let data = await ctx.service.user.user.getuser(name);
            if (data.length == 0) {
                ctx.body = {
                    code: 3,
                    mes: "当前用户不存在，请注册"
                }
                return;
            }

            let res = await ctx.service.user.user.login(name, ctx.helper.help(pwd));
            let token=jwt.sign({...res[0]},this.app.config.keys,{expiresIn:"12h"});
            if (res.length == 1) {
                ctx.body = {
                    code: 1,
                    uid:res[0].id,
                    token,
                    mes: "登录成功"
                }
            } else {
                ctx.body = {
                    code: 0,
                    mes: "登录失败"
                }
            }
        } catch (e) {
            console.log(e)
            ctx.body = {
                code: 4,
                mes: "参数错误"
            }
        }

    }
    async registry() {
        const { ctx } = this;
        let { name, pwd } = ctx.request.body;
        if (!name || !pwd) {
            ctx.body = {
                code: 2,
                mes: "缺少参数"
            }
            return;
        }
        try {
            ctx.validate(createRule);
            let data = await ctx.service.user.user.getuser(name);
            if (data.length == 1) {
                ctx.body = {
                    code: 3,
                    mes: "当前用户已注册，请登录"
                }
                return;
            }

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

        } catch (e) {
            console.log(e);
            ctx.body = {
                code: 4,
                mes: "参数错误"
            }
        }

    }
    async getuser(){
        const {ctx}=this;
        let {uid}=ctx.query;

        let res=await ctx.service.user.user.getmes(uid);
        ctx.body=res
    }
}

module.exports = UserController;