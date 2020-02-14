'use strict';

const Controller = require('egg').Controller;

class ZsController extends Controller {
    async list(){
        let {ctx}=this
        let res=await ctx.service.zs.zs.list()
        if(res.length>0){
           ctx.body={
               code:1,
               mes:res
           }
        }else{
          ctx.body={
              code:0,
              mes:"查询失败"
          }
        }
        
    }
    //添加
  async add() {
    let {ctx}=this;
    let time=new Date();

    let {title,con,sid}=ctx.request.body;
    // console.log(title,con,sid,"2222222222222222222")

    if(!title||!con){
         ctx.body={
             code:3,
             mes:"参数不能为空"
         }
         return
    }


    let know=await this.service.zs.zs.getknow(title,sid)
    
    console.log(know,"88888888888888888")
    if(know.length>0){
        ctx.body={
            code:2,
            mes:"此知识库已存在"
        }
        return
    }

    //保存新的数据库

    let res=await this.service.zs.zs.add(title,con,sid,time);
    console.log(res,"9999999999999999999")
     if(res.affectedRows===1){
         ctx.body={
             code:1,
             mes:"添加成功"
         }
     }else{
         ctx.body={
             code:1,
             mes:"添加失败"
         }
     }
  }

  //删除
  async del(){
      let {ctx}=this;
      let {id}=ctx.query;
      console.log(id,"7777777777777777")
      let res=await ctx.service.zs.zs.delfn(id)
      console.log(res,"1111111111111111111111111111111111111111111111111111")
  //判断是否找到
  if(res. affectedRows===1){
    ctx.body={
        code:1,
        mes:"成功"
    }
}else{
    ctx.body={
        code:0,
        mes:"失败"
    }
}
  }
//编辑
  async updata(){
    let {ctx}=this
    // let time = new Date();
    let {id,title,con}=ctx.request.body
    console.log(id,title,con)
    let res=await ctx.service.zs.zs.updatafn(id,title,con)

    
    console.log(res,"1111111111111111111111111111111111111111111111111111")

//     //判断是否找到
  if(res. affectedRows===1){
      ctx.body={
          code:1,
          mes:"成功"
      }
  }else{
      ctx.body={
          code:0,
          mes:"失败"
      }
  }
}
}

module.exports = ZsController;
