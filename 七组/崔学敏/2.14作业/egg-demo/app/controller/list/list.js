'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
    //添加
  async addlist() {
    let {ctx}=this;
    let {name,phone,card,address,lable,followup,role}=ctx.request.body;
    if(!name||!phone||!card||!address||!lable||!followup||!role){
        ctx.body={
            code:3,
            mes:'缺少参数'
        }
        return;
    }
    let user=await ctx.service.list.list.getuser(name);
    if(user.length>0){
        ctx.body={
            code:2,
            mes:'已经添加过了'
        }
        return;
    }
    let res=await ctx.service.list.list.addlist(name,phone,card,address,lable,followup,role);
if(res.affectedRows==1){
    ctx.body={
        code:1,
        mes:'添加成功'
    }
}else{
    ctx.body={
        code:0,
        mes:'添加失败'
    }
}
  }
  //删除
  async del(){
      let {ctx}=this;
      let {id}=ctx.query;
      if(!id){
          ctx.body={
              code:3,
              mes:'缺少参数'
          }
          return;
      }
      let res=await ctx.service.list.list.del(id);
      if(res.affectedRows!==0){
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
  //获取数据
  async getlist(){
      let {ctx}=this;
      let {page=1,limit=5}=ctx.query;
      let res=await ctx.service.list.list.getlist(page,limit);
      ctx.body={
          code:1,
          ...res
      }
  }
}

module.exports = ListController;
