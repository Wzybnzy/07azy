'use strict';

const Controller = require('egg').Controller;

class FileController extends Controller {
    async list() {
        const { ctx } = this;

        let res = await ctx.service.file.file.list();
        ctx.body = res;
    }
    //   添加
    async add() {
        let { ctx } = this;
        let { filename, info,konw_id, ischeck, uid } = ctx.request.body;
        if (!filename || !info || !ischeck || !uid || !konw_id) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return;
        }

        let res = await ctx.service.file.file.add(ctx.request.body);
        if (res.affectedRows == 1) {
            ctx.body = {
                code: 1,
                mes: '文档添加成功'
            }
        } else {
            ctx.body = {
                code: 0,
                mes: '文档添加失败'
            }
        }
    }
    // 删除
    async del() {
        const { ctx } = this;
        let { id, uid } = ctx.query;
        if (!id || !uid) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return;
        }
        let res = await ctx.service.file.file.del(id, uid);
        if (res.affectedRows == 1) {
            ctx.body = {
                code: 1,
                mes: '文档删除成功'
            }
        } else {
            ctx.body = {
                code: 0,
                mes: '文档删除失败'
            }
        }
    }
    // 编辑
    async update(){
        let { ctx } = this;
        let { filename, info, ischeck, uid } = ctx.request.body;
        if (!filename || !info || !id || !uid) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return;
        }
        let res = await ctx.service.file.file.update(ctx.request.body);
        if (res.affectedRows == 1) {
            ctx.body = {
                code: 1,
                mes: '文档修改成功'
            }
        } else {
            ctx.body = {
                code: 0,
                mes: '文档修改失败'
            }
        }
    }
}

module.exports = FileController;
