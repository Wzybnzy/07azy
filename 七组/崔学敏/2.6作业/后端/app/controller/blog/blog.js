'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
    async add() {
        let { ctx } = this;
        let { title, content, isdefault, uid } = ctx.request.body;
        if (!title || !content || !isdefault || !uid) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return;
        }
        let res = await ctx.service.blog.blog.add(title, content, isdefault, uid);
        if (res.affectedRows == 1) {
            ctx.body = {
                code: 1,
                mes: '添加成功'
            }
        } else {
            ctx.body = {
                code: 0,
                mes: '添加失败'
            }
        }
    }
    //删除
    async del() {
        let { ctx } = this;
        let { id } = ctx.query;
        if (!id) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return;
        }
        let res = await ctx.service.blog.blog.del(id);
        if (res.affectedRows == 1) {
            ctx.body = {
                code: 1,
                mes: '删除成功'
            }
        } else {
            ctx.body = {
                code: 0,
                mes: '删除失败'
            }
        }
    }
    //编辑
    async update() {
        let { ctx } = this;
        let { id, title, content, isdefault } = ctx.request.body;
        if (!id || !title || !content || !isdefault) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return;
        }
        let res = await ctx.service.blog.blog.update(id, title, content, isdefault);
        if (res.affectedRows == 1) {
            ctx.body = {
                code: 1,
                mes: '编辑成功'
            }
        } else {
            ctx.body = {
                code: 0,
                mes: '编辑失败'
            }
        }
    }
    //获取数据
    async list() {
        let { ctx } = this;
        let { uid } = ctx.query;
        if (!uid) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return;
        }
        let res = await this.ctx.service.blog.blog.list(uid);
        ctx.body = {
            code: 1,
            data: res
        }
    }
}

module.exports = BlogController;
