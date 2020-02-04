'use strict';

const Controller = require('egg').Controller;

class ScoresController extends Controller {
  async add() {
    const { ctx } = this;
    let {name,lilun,jineng} = ctx.request.body
    if(!name || !lilun ||jineng){
        ctx.body = {
            code:3,
            mes:'缺少参数'
        }
        return
    }
    let data = await ctx.service.scores.scores.getscores(name)
    if(data.length == 0){
        let res = await ctx.service.scores.scores.add(ctx.request.body)
        ctx.body = res
        if(res.affectedRows == 1){
            ctx.body = {
                code:1,
                mes:'插入成功'
            }
        }else{
            ctx.body = {
                code:0,
                mes:'插入失败'
            }
        }
    }else{
        ctx.body = {
            code:2,
            mes:'该学生已经存在，请去修改'
        }
    }
  }
  async del(){
      let {ctx} = this
      let {id } = ctx.query
      let res = await ctx.service.scores.scores.del(id)
      if(res.affectedRows == 1){
            ctx.body = {
                code:1,
                mes:'删除成功'
            }
      }else{
        console.log('删除'),
        ctx.body = {
            code:0,
            mes:'删除失败'
        }
      }
  }
  async updata(){
      let {ctx} = this
      let res = await ctx.service.scores.scores.updata(ctx.request.body)
      if(res.affectedRows == 1){
        ctx.body = {
            code:1,
            mes:"修改成功"
        }
      }else{
          ctx.body = {
              code:0,
              mes:'修改失败'
          }
      }
  }
  async list(){
      let {ctx} = this
      let {search = ''} = ctx.query
      let res = await ctx.service.scores.scores.list(search)
      ctx.body = res
    }
}

module.exports = ScoresController;
