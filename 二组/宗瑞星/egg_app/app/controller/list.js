'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
  async list() {
    let { ctx } = this;
    let knowData = await this.app.mysql.select('yq_list');
    if(knowData){
        ctx.body = {
            code:200,
            msg: '获取列表成功',
            data:knowData
        }
    }else{
        ctx.body = {
            code:500,
            msg: '获取列表失败'
        }
    }
  }
}

module.exports = ListController;
