'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getuser(name){
      let sql = `select * from user where name='${name}'`
      let res = await this.app.mysql.query(sql)
      return res
  }
    //登录
  async login(name,pwd) {
     let sql = `select * from user where name='${name}' and pwd='${pwd}'`
     let res = await this.app.mysql.query(sql)
     return res
  }
  //注册
  async registry(name,pwd){
    let sql = `insert into user (name,pwd) values ('${name}','${pwd}')`;
    let res = await this.app.mysql.query(sql)
    return res 
  }
}

module.exports = UserService;
