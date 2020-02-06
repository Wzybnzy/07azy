'use strict';

const Service = require('egg').Service;

class FileService extends Service {
  async list(uid) {
    let sql=`select * from file where uid=${uid}`;
    let res=await this.app.mysql.query(sql);
    return res;
  }
  async add(obj){
    let {filename, info, know_id,ischeck, uid}=obj;
    let sql = `insert into file (filename, info,know_id,ischeck, uid) values ('${filename}','${info}','${know_id}',${ischeck},'${uid}')`;
    let res = await this.app.mysql.query(sql);
    return res;
  }
  async del(id,uid){
    let sql = `delete from file where id=${id} and uid=${uid}`;
    let res = await this.app.mysql.query(sql);
    return res;
  }
  async update(obj){
    let {filename, info, id, uid}=obj;
    let sql = `update file set filename='${filename}',info='${info}' where id=${id} and uid=${uid}`;
    let res = await this.app.mysql.query(sql);
    return res;
  }
}

module.exports = FileService;
