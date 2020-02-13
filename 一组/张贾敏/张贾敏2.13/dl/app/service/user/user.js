'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getphone(phone) {
    //  return await this.app.mysql.get("user",{phone})
    let sql=`select * from user where phone='${phone}'`
    let res=await this.app.mysql.query(sql)
    return res
  }

  async registry(phone,pwd){
      return await this.app.mysql.insert("user",{phone,pwd})
  }

  async login(phone,pwd){
      return await this.app.mysql.select("user",{phone,pwd})
  }
}

module.exports = UserService;
