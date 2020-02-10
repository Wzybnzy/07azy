'use strict';

const Service = require('egg').Service;

class DocService extends Service {

  // 查找
  async find(obj) {
    let res = await this.app.mysql.get('doc', obj);
    return res;
  }

  // 新建文档
  async add(obj) {
    let res = await this.app.mysql.insert('doc', obj);
    return res;
  }

  // 修改文档
  async update(obj, options) {
    let res = await this.app.mysql.update('doc', obj, options);
    return res;
  }

  // 删除文档
  async del(obj) {
    let res = await this.app.mysql.delete('doc', obj);
    return res;
  }

  // 查询文档
  async list(uId) {
    let sql = `select * from doc where uId=${uId}`;
    let res = this.app.mysql.query(sql);
    return res;
  }

  // 搜索文档
  async search(val) {
    let sql = `select * from doc where doc_name like '%${val}%' or doc_content like '%${val}%' and isShow='1'`;
    let res = this.app.mysql.query(sql);
    return res;
  }

}

module.exports = DocService;
