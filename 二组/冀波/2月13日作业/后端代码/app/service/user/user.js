'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getuser(phone) {
    let sql=`select * from user where phone=${phone}`;
    let res=await this.app.mysql.query(sql);
    return res;
  }
  async registry(phone,pwd){
    let sql=`insert into user (phone,pwd) values ('${phone}','${pwd}')`;
    let res=await this.app.mysql.query(sql);
    return res;
  }
  async login(phone,pwd){
    let sql=`select * from user where phone=${phone} and pwd=${pwd}`;
    let res=await this.app.mysql.query(sql);
    return res;
  }
}

module.exports = UserService;
