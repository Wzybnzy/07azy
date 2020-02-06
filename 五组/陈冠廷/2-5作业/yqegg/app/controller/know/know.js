'use strict';

const Controller = require('egg').Controller;

class KnowController extends Controller {
  async add() {
    let {ctx}=this;
    let {knowtit,knowcon,isshow,uid}=ctx.request.body;
    if(!knowcon||!knowtit||!isshow||!uid){
      ctx.body={
        code:3,
        msg:'缺少参数'
      }
      return;
    }
    
    let data=await ctx.service.know.know.getuser(uid);
    
    if(data.length==0){
       ctx.body={
         code:2,
         msg:'该用户不存在'
       }
       return;
    }
    let res=await ctx.service.know.know.add(knowtit,knowcon,isshow,uid);
    if(res.affectedRows==1){
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
  async del(){
    let {ctx}=this;
    let {id}=ctx.query;
    if(!id){
      ctx.body={
        code:3,
        msg:'缺少参数'
      }
      return;
    }
    let res=await ctx.service.know.know.del(id);
    if(res.affectedRows==1){
      ctx.body={
        code:1,
        msg:'删除成功'
      }
    }else{
      ctx.body={
        code:0,
        msg:'删除失败'
      }
    }
  }
  async edit(){
    let {ctx}=this;
    let {knowtit,knowcon,id,isshow}=ctx.request.body;
    if(!knowcon||!knowtit||!isshow||!id){
      ctx.body={
        code:3,
        msg:'缺少参数'
      }
      return;
    }
    let data=await ctx.service.know.know.getid(id);
    if(data.length==0){
       ctx.body={
         code:2,
         msg:'该用户不存在'
       }
       return;
    }
    let res=await ctx.service.know.know.edit(knowtit,knowcon,isshow,id);
   
    if(res.affectedRows==1){
      ctx.body={
        code:1,
        msg:'修改成功'
      }
    }else{
      ctx.body={
        code:0,
        msg:'修改失败'
      }
    }

  }
  async search(){
    let {ctx}=this;
    let {val}=ctx.request.body;
    if(!val){
      ctx.body={
        code:3,
        msg:'缺少参数'
      }
      return;
    }
    let res=await ctx.service.know.know.search(val);
    // console.log(res,"00000")
    if(res.length>0){
      ctx.body={
        code:1,
        msg:'查询成功',
        data:res
      }
    }else{
      ctx.body={
        code:0,
        msg:'查询失败'
      }
    }
  }
  async list(){
    let {ctx}=this;
    let res=await ctx.service.know.know.list();
    console.log(res,"000")
    if(res.length>0){
      ctx.body={
        code:1,
        msg:'获取知识库列表成功',
        data:res
      }
    }else{
      ctx.body={
        code:0,
        msg:'获取知识库列表失败'
      }
    }
  }
}

module.exports = KnowController;
