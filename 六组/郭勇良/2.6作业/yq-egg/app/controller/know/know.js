'use strict';

const Controller = require('egg').Controller;

class KnowController extends Controller {
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
        let res = await ctx.service.know.know.list(uid);
        ctx.body = {
            code:1,
            data:res
        };
    }
  async add(){
        let { ctx } = this;
        let { knowname, knowinfo, ischeck, uid } = ctx.request.body;
        // console.log(ctx.request.body)
        console.log(knowname,knowinfo,ischeck,uid)
        if (!knowname || !knowinfo || !ischeck || !uid) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return;
        }

        let res = await ctx.service.know.know.add(ctx.request.body);
        if (res.affectedRows == 1) {
            ctx.body = {
                code: 1,
                mes: '知识库新建成功'
            }
        } else {
            ctx.body = {
                code: 0,
                mes: '知识库新建失败'
            }
        }
    }
    async del(){
        let { ctx } = this;
        let {id,uid}=ctx.query;
        console.log(ctx.query)
        if (!id || !uid) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return;
        }

        let res = await ctx.service.know.know.del(id, uid);
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

    async update(){
        let { ctx } = this;
        let { knowname, knowinfo, ischeck, uid } = ctx.request.body;
        if (!knowname || !knowinfo || !ischeck || !uid) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return;
        }
        let res = await ctx.service.know.know.update(ctx.request.body);
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
