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
    // let data=await ctx.service.know.know.getuser()
  }
}

module.exports = KnowController;
