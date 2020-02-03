'use strict';

const Service = require('egg').Service;

class KnowledgeService extends Service {
  // 添加知识库
  async add(title, info, isshow, uid) {
    let sql = `insert into knowledge (title,info,isshow,uid) values ('${title}','${info}','${isshow}','${uid}')`;
    let res = await this.app.mysql.query(sql);
    return res;
  }

  //   编辑知识库
  async updata(obj) {
    let { title, info, isshow, uid, id } = obj;
    let sql = `update knowledge set title='${title}',info='${info}',isshow='${isshow}' where uid=${uid} and id=${id}`;
    let res = await this.app.mysql.query(sql);
    return res;
  }

  // 删除数据库
  async delete(uid,id) {
    let sql = `delete from knowledge where uid='${uid}' and id='${id}'`;
    let res = await this.app.mysql.query(sql);
    return res;
  }

  // // 查看数据库
  async list(uid) {
    let sql = `select * from knowledge where uid='${uid}'`;
    let res = await this.app.mysql.query(sql);
    return res;
  }

}

module.exports = KnowledgeService;
