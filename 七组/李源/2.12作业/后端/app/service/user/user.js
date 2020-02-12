'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getuser(name) {
    let sql=`select * from users where name='${name}'`;
    let res=await this.app.mysql.query(sql);
    return res;
  }
  async login(name,pwd){
    let sql=`select * from users where name='${name}' and pwd='${pwd}'`;
    let res=await this.app.mysql.query(sql);
    return res;
  }
  async registry(name,pwd){
    let sql=`insert into users (name,pwd) values ('${name}','${pwd}')`;
    let res=await this.app.mysql.query(sql);
    return res;
  }
}

module.exports = UserService;