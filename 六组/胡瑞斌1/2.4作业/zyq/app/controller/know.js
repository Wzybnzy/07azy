'use strict';

const Controller = require('egg').Controller;

class KnowController extends Controller {
  async add() {
    let {ctx} = this
    let {knowname,knowjj,isshow,uid} = ctx.request.body
    if(!knowname||!knowjj||!isshow||!uid){
        ctx.body={
            code:3,
            mes:'缺少参数'
        }
        return
    }
    let users = await ctx.service.know.getuser(knowname)
    console.log(users);
    if(users.length>0){
        ctx.body={
            code:4,
            mes:'该用户名已经注册'
        }
    }else{
        let res = await ctx.service.know.add(ctx.request.body)
        ctx.body=res
    }

  }
}

module.exports = KnowController;
