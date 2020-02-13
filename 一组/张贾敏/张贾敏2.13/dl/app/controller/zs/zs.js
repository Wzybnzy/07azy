'use strict';

const Controller = require('egg').Controller;

class ZsController extends Controller {
  async add() {
    let {ctx}=this;
    let {s_name,s_phone,bq,yh,sf,address}=ctx.request.body;
    console.log(s_name,s_phone,bq,yh,sf,address)

    if(!s_name||!s_phone||!bq||!yh||!sf||!address){
        ctx.body={
            code:3,
            mes:"参数不能为空"
        }
        return 
    }
    let name=await ctx.service.zs.zs.getname(s_name)
    console.log(name)

    if(name.length>0){
        ctx.body={
            code:2,
            mes:"这个姓名已经弄过了，请换一个"
        }
    }
    let res=await ctx.service.zs.zs.add(s_name,s_phone,bq,yh,sf,address)
    console.log(res,"1111111111111")
    if(res.affectedRows===1){
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

  async del(){
      let {ctx}=this;
      let {id}=ctx.query;
      console.log(id)

      let res=await ctx.service.zs.zs.del(id)
      console.log(res,"88888888888888")
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

  async list(){
      let {ctx}=this;
      let res=await ctx.service.zs.zs.list()
      console.log(res,"11111111111")
       ctx.body=res
  }
}

module.exports = ZsController;
