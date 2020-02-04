'use strict';

const Service = require('egg').Service;

class IndexService extends Service {
  async getuser(name) {
    let res = await this.app.mysql.query(`select * from user2 where name = '${name}'`)
    return res
  }
  async login(name,pwd){
    let sql = `select * from user2 where name='${name}' and pwd='${pwd}'`
    let res = await this.app.mysql.query(sql)
    return res
  }
  async register(name,pwd){
    let sql = `insert into user2 (name,pwd) values ('${name}','${pwd}')`
    let res = await this.app.mysql.query(sql)
    return res
  }
}

module.exports = IndexService;

