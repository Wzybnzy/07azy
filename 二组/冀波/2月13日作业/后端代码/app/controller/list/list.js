'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
  async addlist() {
    let {ctx}=this;
    let {name,phone,card,address,label,followup,role}=ctx.request.body;
    if(!name||!phone||!card||!address||!label||!followup||!role){
      ctx.body={
        code:2,
        msgL:'缺少参数'
      }
      return;
    }
    //判断name是否存在
    let user=await ctx.service.list.list.getuser(name);
    if(user.length>0){
      ctx.body={
        code:3,
        msg:'该用户已经存在'
      }
      return;
    }
    let res=await ctx.service.list.list.addlist(ctx.request.body);
    if(res.affectedRows===1){
      ctx.body={
        code:1,
        msg:'添加成功'
      }
    }else{
      ctx.body={
        code:0,
        msg:'添加失败'
      }
    }
  }
  async dellist(){
    let {ctx}=this;
    let {id}=ctx.query;
    let res=await ctx.service.list.list.dellist(id);
    if(res.affectedRows!==0){
      ctx.body={
        code:1,
        msg:"删除成功"
      }
    }else{
      ctx.body={
        code:0,
        msg:'删除失败'
      }
    }
  }
  async getlist(){
    let ctx=this;
    let {page=1,limit=5}=ctx.query;
    let res=await this.service.list.list.getlist(page,limit);
    ctx.body={
      code:1,
      ...res
    }
  }
}

module.exports = ListController;
