'use strict';

const Service = require('egg').Service;

class KnowService extends Service {

  // 查找
  async find(obj) {
    let res = await this.app.mysql.get('know', obj);
    return res;
  }

  // 新建知识库
  async add(obj) {
    let res = await this.app.mysql.insert('know', obj);
    return res;
  }

  // 删除知识库
  async del(id, uId) {
    let res = await this.app.mysql.delete('know', { id, uId });
    return res;
  }

  // 修改知识库
  async update(obj) {
    let res = await this.app.mysql.update('know', obj);
    return res;
  }

  // 查找所有知识库
  async list(uId) {
    let sql = `select * from know where uId=${uId}`;
    let res = this.app.mysql.query(sql);
    return res;
  }

}

module.exports = KnowService;
