'use strict';

const Controller = require('egg').Controller;

class KnowController extends Controller {
    async add() {
        let { ctx } = this
        let { knowname, knowjj, isshow, uid } = ctx.request.body
        if (!knowname || !knowjj || !isshow || !uid) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return
        }
        let res = await ctx.service.know.add(ctx.request.body)
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
    async list(){
        let {ctx} = this
        let {uid} = ctx.query
        if(!uid){
            ctx.body={
                code:3,
                mes:'缺少参数'
            }
            return
        }
        let res = await ctx.service.know.list(uid)
        ctx.body=res
    }
    async del(){
        let {ctx} = this
        let {uid,id} = ctx.query
        if(!uid||!id){
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return
        }
        let res = await ctx.service.know.del(uid,id)
        if(res.affectedRows==1){
            ctx.body={
                code:1,
                mes:'删除成功'
            }
        }else{
            ctx.body={
                code:0,
                mes:'删除失败'
            }
        }
    }
    async update(){
        let {ctx} = this
        let { knowname, knowjj, isshow, uid ,id} = ctx.request.body
        if (!knowname || !knowjj || !isshow || !uid||!id) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return
        }
        let res = await ctx.service.know.update(ctx.request.body)
        ctx.body = res
        if(res.affectedRows==1){
            ctx.body={
                code:1,
                mes:'修改成功'
            }
        }else{
            ctx.body={
                code:0,
                mes:'修改失败'
            }
        }
    }
}

module.exports = KnowController;
