'use strict';

const Controller = require('egg').Controller;

class KnowController extends Controller {
  //新增
  async add() {
    let {ctx}=this;
    let {know_name,know_info,isshow,uid}=ctx.request.body;
    if(!know_name||!know_info||!isshow||!uid){
        ctx.body={
            code:4,
            msg:"缺少参数"
        }
        return;
    }
    let res=await ctx.service.know.know.add(ctx.request.body)
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
  //更新
  async update(){
    let {know_name,know_info,isshow,uid,id}=this.ctx.request.body;
    if(!know_name||!know_info||!isshow||!uid||!id){
        ctx.body={
            code:4,
            msg:"缺少参数"
        }
        return;
    }
    let res=await ctx.service.know.know.update(ctx.request.body)
    if (res.affectedRows == 1) {
        ctx.body = {
            code: 1,
            mes: '知识库修改成功'
        }
    } else {
        ctx.body = {
            code: 0,
            mes: '知识库修改失败'
        }
    }
  }
  //删除
  async delete(){
    let {uid,id}=this.ctx.query;
    if(!uid||!id){
        ctx.body={
            code:4,
            msg:"缺少参数"
        }
        return;
    }
    let res=await ctx.service.know.know.delete(ctx.query)
    if (res.affectedRows == 1) {
        ctx.body = {
            code: 1,
            mes: '知识库删除成功'
        }
    } else {
        ctx.body = {
            code: 0,
            mes: '知识库删除失败'
        }
    }
  }
  //查询全部列表
  async list(){
    let {uid}=this.ctx.query;
    if(!uid){
        ctx.body={
            code:4,
            msg:"缺少参数"
        }
        return;
    }
    let res=await ctx.service.know.know.list(uid);
    ctx.body = {
        code:1,
        data:res
    };
  }
}

module.exports = KnowController;