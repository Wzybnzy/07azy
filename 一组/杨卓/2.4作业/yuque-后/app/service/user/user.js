'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getuser(name) {//判断是否有该用户
    let sql=`select * from user where name='${name}'`;
    let res=await this.app.mysql.query(sql);
    return res;
  }
  async register(name,pwd){//注册语句
   let sql=`insert into user (name,pwd) values ('${name}','${pwd}')`;
   let res=await this.app.mysql.query(sql);
   return res;
  }
  async login(name,pwd){//登录语句
    let sql=`select * from user where name='${name}' and pwd='${pwd}'`;
    let res=await this.app.mysql.query(sql);
    return res;
  }
}

module.exports = UserService;
