'use strict';

const Controller = require('egg').Controller;
const help = require('../extend/helper');
const jwt = require('jsonwebtoken');

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
        const res = await ctx.service.user.getuser(name);
        if (res.length > 0) {
            ctx.body = {
                code: 1,
                msg: '该用户已存在 请重新注册',
            };
        } else {
            const result = await ctx.service.user.registry(name, help(pwd));
            if (result.affectedRows > 0) {
                ctx.body = {
                    code: 1,
                    msg: '注册成功 请登录',
                };
            } else {
                ctx.body = {
                    code: 0,
                    msg: '注册失败',
                };
            }
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
                    uid: result[0].id,
                    name: name,
                    token,
                };
            } else {
                ctx.body = {
                    code: 0,
                    msg: '登录失败',
                };
            }
        } else {
            ctx.body = {
                code: 3,
                msg: '该用户不存在  请注册',
            };
        }
    }
    async addknow() {
        const { ctx } = this;
        const { zisiku_name, zisiku_info, isshow, uid } = ctx.request.body;
        console.log(zisiku_name, zisiku_info, isshow, uid, '#####');
        if (!zisiku_name || !zisiku_info || !isshow || !uid) {
            ctx.body = {
                code: 4,
                msg: '缺少参数',
            };
            return;
        }
        const result = await ctx.service.user.addknow(zisiku_name, zisiku_info, isshow, uid);
        if (result.affectedRows > 0) {
            ctx.body = {
                code: 1,
                msg: '添加知识库成功',
            };
        } else {
            ctx.body = {
                code: 0,
                msg: '添加知识库失败',
            };
        }
    }
    async updateknow() {
        const { ctx } = this;
        const { zisiku_name, zisiku_info, isshow, uid, id } = ctx.request.body;
        if (!zisiku_name || !zisiku_info || !isshow || !uid || !id) {
            ctx.body = {
                code: 4,
                msg: '缺少参数',
            };
            return;
        }
        const result = await ctx.service.user.updateknow(zisiku_name, zisiku_info, isshow, uid, id);
        if (result.affectedRows > 0) {
            ctx.body = {
                code: 1,
                msg: '修改知识库成功',
            };
        } else {
            ctx.body = {
                code: 0,
                msg: '修改知识库失败',
            };
        }
    }
    async delknow() {
        const { ctx } = this;
        const { id } = ctx.query;
        console.log(id);
        if (!id) {
            ctx.body = {
                code: 4,
                msg: '缺少参数',
            };
            return;
        }
        const result = await ctx.service.user.delknow(id);
        const data = await this.app.mysql.query(`select * from zhishiku`);
        if (result.affectedRows > 0) {
            ctx.body = {
                code: 1,
                msg: '知识库删除成功',
                data: data,
            };
        } else {
            ctx.body = {
                code: 1,
                msg: '知识库删除失败',
            };
        }
    }
    async getknow() {
        const { ctx } = this;
        const result = await ctx.service.user.getknow();
        if (result.length > 0) {
            ctx.body = {
                code: 1,
                msg: '获取成功',
                data: result,
            };
        } else {
            ctx.body = {
                code: 0,
                msg: '获取失败',
            };
        }
    }
    async addfile() {
        const { ctx } = this;
        const { file_name, file_info, know_id, isshow, uid } = ctx.request.body;
        console.log(file_name, file_info, know_id, isshow, uid);
        if (!file_name || !file_info || !know_id || !isshow || !uid) {
            ctx.body = {
                code: 4,
                msg: '缺少参数',
            };
            return;
        }
        const result = await ctx.service.user.addfile(file_name, file_info, know_id, isshow, uid);
        ctx.body = result;
        if (result.affectedRows > 0) {
            ctx.body = {
                code: 1,
                msg: '添加文档成功',
            };
        } else {
            ctx.body = {
                code: 0,
                msg: '添加文档失败',
            };
        }
    }
    async delfile() {
        const { ctx } = this;
        const { id } = ctx.query;
        console.log(id);
        if (!id) {
            ctx.body = {
                code: 4,
                msg: '缺少参数',
            };
            return;
        }
        const result = await ctx.service.user.delfile(id);
        const data = await this.app.mysql.query(`select * from file`);
        if (result.affectedRows > 0) {
            ctx.body = {
                code: 1,
                msg: '文档删除成功',
                data: data,
            };
        } else {
            ctx.body = {
                code: 1,
                msg: '文档删除失败',
            };
        }
    }
    async updatefile() {
        const { ctx } = this;
        const { file_name, file_info, know_id, isshow, uid, id } = ctx.request.body;
        if (!file_name || !file_info || !know_id || !isshow || !uid || !id) {
            ctx.body = {
                code: 4,
                msg: '缺少参数',
            };
            return;
        }
        const result = await ctx.service.user.updatefile(
            file_name,
            file_info,
            know_id,
            isshow,
            uid,
            id
        );
        if (result.affectedRows > 0) {
            ctx.body = {
                code: 1,
                msg: '修改文档成功',
            };
        } else {
            ctx.body = {
                code: 0,
                msg: '修改文档失败',
            };
        }
    }
}

module.exports = UserController;
