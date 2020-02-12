'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getuser(phone){
    let res=await this.app.mysql.get('user',{phone})
    return res;
  }
  
  async register(phone,pwd) {//注册
    let res=await this.app.mysql.insert('user',{phone,pwd})
    return res;
  }
  async login(phone,pwd){//登录
    let res=await this.app.mysql.select('user',{phone,pwd})
    return res;
  }
}

module.exports = UserService;
