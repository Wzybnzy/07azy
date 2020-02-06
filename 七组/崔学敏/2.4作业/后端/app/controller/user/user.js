'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
const createVid = {
    name: {
        type: 'string'
    },
    pwd: {
        type: 'password'
    }
}
class UserController extends Controller {
    //注册
    async register() {
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
            ctx.validate(createVid);
            //判断用户是否已经注册过了
            let data = await ctx.service.user.user.getuser(name);
            if (data.length == 0) {//没有注册过
                let res = await ctx.service.user.user.register(name, ctx.helper.help(pwd));
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
            } else {
                ctx.body = {
                    code: 2,
                    mes: '已经注册过了'
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
    async login() {
        let { ctx } = this;
        let { name, pwd } = ctx.request.body;
        if (!name || !pwd) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return;
        }
        //判断是否已经注册过，如果没有注册过，需先去注册
        try {
            ctx.validate(createVid);
            let user = await ctx.service.user.user.getuser(name);
            if (user.length == 0) {
                ctx.body = {
                    code: 2,
                    mes: '该用户没有注册过'
                }
            } else {
                let res = await ctx.service.user.user.login(name, ctx.helper.help(pwd));
                let token = jwt.sign({ ...res[0] }, this.app.config.keys, { expiresIn: '12h' })
                if (res.length > 0) {
                    ctx.body = {
                        code: 1,
                        token,
                        uid: res[0].id,
                        mes: '登录成功'
                    }
                } else {
                    ctx.body = {
                        code: 0,
                        mes: '登录失败'
                    }
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
}

module.exports = UserController;
