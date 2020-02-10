const Controller = require('egg').Controller;

class StoreController extends Controller {
  //创建知识库
  async create() {
    let { ctx, service } = this;
    
    ctx.body="创建知识库"
  }
   //编辑知识库
   async update() {
    let { ctx, service } = this;
    ctx.body="编辑知识库"
  }
   //删除知识库
   async destory() {
    let { ctx, service } = this;
    ctx.body="删除知识库"
  }
   //查询知识库
   async index() {
    let { ctx, service } = this;
    ctx.body="查询知识库"
   }
}

module.exports = StoreController;