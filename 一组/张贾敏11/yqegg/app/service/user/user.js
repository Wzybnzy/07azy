'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    //判断用户名是否已经注册过，需要查找一下
  async getuser(name) {
    let res =await this.app.mysql.query(`select * from dl where name='${name}'`)
    return res
  }


  //注册  插入这个mysql语句
  async registry(name,pwd){
      let res =await this.app.mysql.query(`insert into dl (name,pwd) values ('${name}','${pwd}')`)
      return res
  }

  //登录  需要查找

  async login(name,pwd){
      let res=await this.app.mysql.query(`select * from dl where name='${name}' and pwd='${pwd}'`)
      return res
  }
}

module.exports = UserService;
