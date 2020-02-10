'use strict';

const Controller = require('egg').Controller;

class KnowController extends Controller {
  //新建数据库
  async creatknow() {
    let {ctx}=this
    let {uid,kname,kintro,isshow}=ctx.request.body
    console.log(uid,kname,kintro,isshow)
    let res=await ctx.service.know.know.creatknow(uid,kname,kintro,isshow)
    if(res.affectedRows==1){
        ctx.body={
            code:1,
            msg:"新建成功"
        }
    }else{
        ctx.body={
            code:0,
            msg:"新建失败"
        }
    }
  }

  //删除数据库
  async relknow(){
    let {ctx}=this
    let {knowid}=ctx.query
    let res=await ctx.service.know.know.relknow(knowid)
    if(res.affectedRows==1){
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

  //修改数据库
  async updateknow(){
    let {ctx}=this
    let {knowid,kname,kintro,isshow}=ctx.request.body
    console.log(knowid,kname,kintro,isshow)
    let res=await ctx.service.know.know.updateknow(knowid,kname,kintro,isshow)
    if(res.affectedRows==1){
      ctx.body={
          code:1,
          msg:"修改成功"
      }
    }else{
        ctx.body={
            code:0,
            msg:"修改失败"
        }
    }

  }

  //数据库列表
  async knowlist(){
    let {ctx}=this
    let {uid}=ctx.request.body
    let res=await ctx.service.know.know.knowlist(uid)
    ctx.body={
      code:1,
      data:res,
    }
    
  }

  //获取知识库名
  async getkname(){
    let {ctx}=this
    let {kid}=ctx.request.body
    let res=await ctx.service.know.know.getkname(kid)
    ctx.body={
      code:1,
      data:res[0].know_name,
    }
  }

}

module.exports = KnowController;
