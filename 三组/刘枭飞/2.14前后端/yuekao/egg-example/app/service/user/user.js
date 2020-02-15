'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async iszc(iphone) {
    let sql = `select * from user where iphone='${iphone}'`;
    let res = await this.app.mysql.query(sql);
    return res
  }
  async zc(iphone, pwd) {
    let sql = `insert into user (iphone,pwd) values ('${iphone}','${pwd}')`
    let res = await this.app.mysql.query(sql);
    return res;
  }
  async login(iphone, pwd) {
    let sql = `select * from user where iphone='${iphone}' and pwd='${pwd}'`
    let res = await this.app.mysql.query(sql);
    return res;
  }
}

module.exports = UserService;
