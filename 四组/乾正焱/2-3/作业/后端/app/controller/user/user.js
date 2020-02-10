'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
class UserController extends Controller {
    // 注册
    async registry() {
        let { ctx } = this;
        let { name, pwd } = ctx.request.body;
        if (!name || !pwd) {
            ctx.body = {
                code: 2,
                msg: "缺少参数"
            }
            return;
        }

        let data = await ctx.service.user.user.getuser(name);
        if (data.length > 0) {
            ctx.body = {
                code: 3,
                msg: "该用户已存在"
            }
        } else {
            let res = await ctx.service.user.user.registry(name, ctx.helper.help(pwd));
            if (res.affectedRows == 1) {
                ctx.body = {
                    code: 1,
                    msg: "注册成功！"
                }
            } else {
                ctx.body = {
                    code: 0,
                    msg: "注册失败！"
                }
            }
        }

    }

    // 登录
    async login() {
        let { ctx } = this;
        let { name, pwd } = ctx.request.body;
        if (!name || !pwd) {
            ctx.body = {
                code: 2,
                msg: "缺少参数"
            }
            return;
        }

        let data = await ctx.service.user.user.getuser(name, ctx.helper.help(pwd));
        if (data.length > 0) {//已注册，可登录
            let res = await ctx.service.user.user.login(name, ctx.helper.help(pwd));
            let token = jwt.sign({...res[0]},this.app.config.keys,{expiresIn:"10h"})
            if (res.length>0) {
                ctx.body = {
                    code: 1,
                    token,
                    uid:res[0].id,
                    pwd:pwd,
                    msg: "登录成功"
                }
            } else {
                ctx.body = {
                    code: 0,
                    msg: "登录失败"
                }
            }

        } else {//未注册
            ctx.body = {
                code: 3,
                msg: "你还未注册，请先注册"
            }
        }
    }

    


}

module.exports = UserController;
