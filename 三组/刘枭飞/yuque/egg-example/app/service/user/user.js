'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async iszc(name) {
    let sql = `select * from user where name='${name}'`;
    let res = await this.app.mysql.query(sql);
    return res;
  }
  async zc(name, pwd) {
    let sql = `insert into user (name,pwd) values ('${name}','${pwd}')`;
    let res = await this.app.mysql.query(sql);
    return res;
  }
  async login(name, pwd) {
    let sql = `select * from user where name='${name}' and pwd='${pwd}'`;
    let res = await this.app.mysql.query(sql);
    return res;
  }
  async add(title, jije, uid, isshow) {
    let sql = `insert into zsku (name,uid,brief,isshow) values ('${title}','${uid}','${jije}','${isshow}')`
    let res = await this.app.mysql.query(sql)
    return res;
  }
  async select(uid) {
    let sql = `select * from zsku where uid='${uid}'`
    let res = await this.app.mysql.query(sql)
    return res
  }
  async del(id) {
    let sql = `delete from zsku where id='${id}'`
    let res = await this.app.mysql.query(sql)
    return res
  }

  async updata(title, jije, isshow, id) {
    let sql = `update zsku set name='${title}',brief='${jije}',isshow='${isshow}' where id='${id}'`
    let res = await this.app.mysql.query(sql);
    return res;
  }
}

module.exports = UserService;
