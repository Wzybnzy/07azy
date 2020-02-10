'use strict';

const Controller = require('egg').Controller;

class KnowController extends Controller {
    async add() {
        let { ctx } = this
        let { filename, fileinfo, isshow, uid, knowid } = ctx.request.body
        if (!filename || !fileinfo || !isshow || !uid || !knowid) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return
        }
        let res = await ctx.service.file.add(ctx.request.body)
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
    async list() {
        let { ctx } = this
        let { uid } = ctx.query
        if (!uid) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return
        }
        let res = await ctx.service.file.list(uid)
        ctx.body = res
    }
    async del() {
        let { ctx } = this
        let { uid, id } = ctx.query
        if (!uid || !id) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return
        }
        let res = await ctx.service.file.del(uid, id)
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
    async search() {
        let { ctx } = this
        let { search } = ctx.query
        if (!search) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return
        }
        let res = await ctx.service.file.search(search)
        if (res.length > 0) {
            ctx.body = {
                code: 1,
                mes: '搜索成功',
                data: res
            }
        } else {
            ctx.body = {
                code: 0,
                mes: '搜索失败'
            }
        }
    }
    async detail() {
        let { ctx } = this
        let { uid, knowid } = ctx.query
        if (!uid || !knowid) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return
        }
        let res = await ctx.service.file.detail(uid,knowid)
        ctx.body = res
    }
    async update() {
        let { ctx } = this
        let { filename, fileinfo, isshow, uid, id } = ctx.request.body
        if (!filename || !fileinfo || !isshow || !uid || !id) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return
        }
        let res = await ctx.service.file.update(ctx.request.body)
        ctx.body = res
        if (res.affectedRows == 1) {
            ctx.body = {
                code: 1,
                mes: '修改成功'
            }
        } else {
            ctx.body = {
                code: 0,
                mes: '修改失败'
            }
        }
    }
}

module.exports = KnowController;
