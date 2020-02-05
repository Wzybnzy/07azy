'use strict';

const Controller = require('egg').Controller;

class KnowledgeController extends Controller {
    //  添加知识库
    async add() {
        let { ctx } = this;
        let { title, info, isshow, uid } = ctx.request.body;
        if (!title || !info || !isshow || !uid) {
            ctx.body = {
                code: 2,
                msg: "缺少参数"
            }
            return;
        }
        let res = await ctx.service.knowledge.knowledge.add(title, info, isshow, uid);
        if (res.affectedRows == 1) {
            ctx.body = {
                code: 1,
                msg: "添加知识库成功！"
            }
        } else {
            ctx.body = {
                code: 0,
                msg: "添加知识库失败！"
            }
        }
    }

    //   编辑知识库
    async updata() {
        let { ctx } = this;
        let { title, info, isshow, uid, id } = ctx.request.body;
        if (!title || !info || !isshow || !uid || !id) {
            ctx.body = {
                code: 2,
                msg: "缺少参数"
            }
            return;
        }
        let res = await ctx.service.knowledge.knowledge.updata(ctx.request.body);
        if (res.affectedRows == 1) {
            ctx.body = {
                code: 1,
                msg: "编辑知识库成功！"
            }
        } else {
            ctx.body = {
                code: 0,
                msg: "编辑知识库失败！"
            }
        }
    }

    //   删除知识库
    async delete() {
        let { ctx } = this;
        let { uid, id } = ctx.request.query;
        if (!uid || !id) {
            ctx.body = {
                code: 2,
                msg: "缺少参数"
            }
            return;
        }
        let res = await ctx.service.knowledge.knowledge.delete(uid,id);
        if (res.affectedRows == 1) {
            ctx.body = {
                code: 1,
                list:res,
                msg: "删除知识库成功！"
            }
        } else {
            ctx.body = {
                code: 0,
                msg: "删除知识库失败！"
            }
        }
    }
 
    //   查看知识库
    async list() {
        let { ctx } = this;
        let { uid } = ctx.request.query;
        console.log(uid,"uid***************")
        if (!uid) {
            ctx.body = {
                code: 2,
                msg: "缺少参数"
            }
            return;
        }
        let res = await ctx.service.knowledge.knowledge.list(uid);
        if (res.length>0) {
            ctx.body = {
                code: 1,
                list:res,
                msg: "查看知识库成功！"
            }
        } else {
            ctx.body = {
                code: 0,
                msg: "查看知识库失败！"
            }
        }
    }
}

module.exports = KnowledgeController;
