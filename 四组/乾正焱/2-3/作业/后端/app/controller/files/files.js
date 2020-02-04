'use strict';

const Controller = require('egg').Controller;

class FilesController extends Controller {
    // 添加文档
    async add() {
        let { ctx } = this;
        let { file_title, file_con, uid, kid } = ctx.request.body;
        if (!file_title || !file_con || !uid || !kid) {
            ctx.body = {
                code: 2,
                msg: "缺少参数！"
            }
            return;
        }
        let res = await ctx.service.files.files.add(file_title,file_con,uid,kid);
        if (res.affectedRows == 1) {
            ctx.body = {
                code: 1,
                msg: "添加文档成功！"
            }
        } else {
            ctx.body = {
                code: 0,
                msg: "添加文档失败！"
            }
        }
    }

    async updata() {
        let { ctx } = this;
        let { file_title, file_con, uid, id } = ctx.request.body;
        if (!file_title || !file_con || !uid || !id) {
            ctx.body = {
                code: 2,
                msg: "缺少参数！"
            }
            return;
        }
        let res = await ctx.service.files.files.updata(file_title,file_con,uid,id);
        if(res.affectedRows==1){
            ctx.body={
                code:1,
                msg:"编辑成功！"
            }
        }else{
            ctx.body={
                code:0,
                msg:"编辑失败"
            }
        }
    }

    async delete() {
        let {ctx} = this;
        let {uid,id} = ctx.request.query;
        if (!uid || !id) {
            ctx.body = {
                code: 2,
                msg: "缺少参数！"
            }
            return;
        }
        let res = await ctx.service.files.files.delete(uid,id);
        if(res.affectedRows==1){
            ctx.body={
                code:1,
                msg:"文档删除成功！"
            }
        }else{
            ctx.body={
                code:0,
                msg:"文档删除失败！"
            }
        }
    }

    async list() {
        let {ctx} = this;
        let {uid} = ctx.request.query;
        if(!uid){
            ctx.body={
                code:2,
                msg:"缺少参数"
            }
            return;
        }
        let res = await ctx.service.files.files.list(uid);
        if(res.length>0){
            ctx.body={
                code:1,
                msg:"查看文档成功！",
                data:res
            }
        }else{
            ctx.body={
                code:0,
                msg:"查看文档失败！"
            }
        } 
    }

    async detail() {
        let {ctx} = this;
        let {uid,kid} = ctx.request.query;
        if(!uid || !kid){
            ctx.body={
                code:2,
                msg:"缺少参数"
            }
            return;
        }
        let res = await ctx.service.files.files.detail(uid,kid);
        if(res.length>0){
            ctx.body={
                code:1,
                msg:"查看详情成功！",
                data:res
            }
        }else{
            ctx.body={
                code:0,
                msg:"查看详情失败！"
            }
        } 
    }

    async search(){
        let {ctx} = this;
        let {search=''} = ctx.request.body;
        let res = await ctx.service.files.files.search(search);
        if(res.length>0){
            ctx.body={
                code:1,
                msg:"搜索成功！",
                data:res
            }
        }else{
            ctx.body={
                code:0,
                msg:"搜索失败！"
            }
        }
    }
}

module.exports = FilesController;
