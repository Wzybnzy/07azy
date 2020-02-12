'use strict';

const Service = require('egg').Service;

class ListService extends Service {

  // 查找
  async find(obj) {
    let res = await this.app.mysql.get('list', obj);
    return res;
  }

  // 添加
  async add(obj) {
    let res = await this.app.mysql.insert('list', obj);
    return res;
  }

}

module.exports = ListService;
