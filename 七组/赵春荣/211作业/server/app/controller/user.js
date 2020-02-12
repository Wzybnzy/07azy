'use strict';

const Controller = require('egg').Controller;
const help = require('../extend/helper');
const jwt = require('jsonwebtoken');

const createRules = {
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
        const { name, pwd } = ctx.request.body;
        console.log(name, pwd);
        if (!name || !pwd) {
            ctx.body = {
                code: 4,
                msg: '参数不全',
            };
            return;
        }
        try {
            ctx.validate(createRules);
            const res = await ctx.service.user.getuser(name);
            if (res.length > 0) {
                ctx.body = {
                    code: 3,
                    msg: '该用户已存在  请重新注册',
                };
            } else {
                const result = await ctx.service.user.registry(name, help(pwd));
                if (result.affectedRows > 0) {
                    ctx.body = {
                        code: 1,
                        msg: '注册 成功',
                    };
                } else {
                    ctx.body = {
                        code: 1,
                        msg: '注册 失败',
                    };
                }
            }
        } catch (e) {
            console.log(e);
            ctx.body = {
                code: 4,
                msg: '密码应不低于 6位',
            };
        }
    }

    async login() {
        const { ctx } = this;
        const { name, pwd } = ctx.request.body;
        console.log(name, pwd);
        if (!name || !pwd) {
            ctx.body = {
                code: 4,
                msg: '参数不全',
            };
            return;
        }
        const res = await ctx.service.user.getuser(name);
        if (res.length > 0) {
            const result = await ctx.service.user.login(name, help(pwd));
            const token = jwt.sign({ ...result[0] }, this.app.config.keys, { expiresIn: '20h' });
            if (result.length > 0) {
                ctx.body = {
                    code: 1,
                    msg: '登陆成功',
                    token,
                    uid: result[0].id,
                    name: result[0].name,
                };
            } else {
                ctx.body = {
                    code: 0,
                    msg: '登陆失败',
                };
            }
        } else {
            ctx.body = {
                code: 3,
                msg: '该用户不存在 请注册',
            };
        }
    }
    async getuserpower() {
        const { ctx } = this;
        const { id } = ctx.query;
        console.log(id);
        const result = await ctx.service.user.getuserpower(id);
        if (result.length > 0) {
            ctx.body = {
                code: 0,
                msg: 'success',
                data: result,
            };
        }
    }
    async getuserinfo() {
        const { ctx } = this;
        const { id } = ctx.query;
        console.log(id);
        const result = await ctx.service.user.getuserinfo(id);
        ctx.body = result;
    }
}

module.exports = UserController;
