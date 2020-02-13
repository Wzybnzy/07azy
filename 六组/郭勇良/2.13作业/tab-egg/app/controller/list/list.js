'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
  async addlist(){
    let {ctx}=this
    let {name,phone,label,role,card,address,followup}=ctx.request.body
    if(!name||!phone||!label||!role||!card||!address||!followup){
        ctx.body={
          code:4,
          mes:"缺少参数"
        }
        return
    }
    let res=await ctx.service.list.list.addlist(name,phone,label,role,card,address,followup)
    if(res.affectedRows==1){
       ctx.body={
         code:1,
         mes:"添加成功"
       }
    }else{
      ctx.body={
        code:0,
        mes:"添加失败"
      }
    }
  }
  async dellist(){
    let {ctx}=this
    let{id}=ctx.query
    let res=await ctx.service.list.list.dellist(id)
    if(res.affectedRows==1){
         ctx.body={
           code:1,
           mes:"删除成功"
         }
    }else{
      ctx.body={
        code:0,
        mes:"删除失败"
      }
    }
  }
  async getlist(){
    let {ctx}=this
    let res=await ctx.service.list.list.getlist()
    // console.log(res);
    if(res.length>0){
      ctx.body={
        code:1,
        mes:"查询成功",
        data:res
      }
    }else{
      ctx.body={
        code:0,
        mes:"查询失败",
        
      }
    }
    
  }
}

module.exports = ListController;
