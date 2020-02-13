'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
  async add() {//列表添加
    let {ctx}=this;
    let {name,phone,card,address,label,followup,role}=ctx.request.body
    if(!name||!phone||!card||!address||!label||!followup||!role){
        ctx.body={
            code:4,
            msg:"缺少参数"
        }
        return;
    }
    let list=await ctx.service.list.list.getuser(name)
    if(!list){//该用户不存在
        let res=await ctx.service.list.list.add(ctx.request.body)        
        if(res.affectedRows==1){
            ctx.body={
                code:1,
                msg:"插入成功"
            }
        }else{
            ctx.body={
                code:0,
                msg:"插入失败"
            }
        }
    }else{//该用户已存在
        ctx.body={
            code:2,
            msg:"该用户已存在"
        }
    }
  }
  async del(){//列表删除
    let {ctx}=this;
    let {id}=ctx.query
    if(!id){
        ctx.body={
            code:4,
            msg:"缺少参数"
        }
        return;
    }
    let res=await ctx.service.list.list.del(id)
    if(res.affectedRows!==0){//不等于0就是可以删除多个
        ctx.body={
            code:1,
            msg:"删除成功"
        }
    }else{
        ctx.body={
            code:0,
            msg:"删除失败"
        }
    }
  }
  async getall(){//获取列表 分页
    let {ctx}=this;
    let {page=1,limit=5}=ctx.query;//设置默认值
    let res=await ctx.service.list.list.getall(page,limit)
    ctx.body={
        code:1,
        ...res
    }
  }
}

module.exports = ListController;
