'use strict';

const Controller = require('egg').Controller;

class KnowController extends Controller {
  async creatknow() {
    let {ctx}=this
    let {uid,kname,kintro,isshow}=ctx
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
}

module.exports = KnowController;
