'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async ishave(phone) {
    let res=await this.app.mysql.get('users', { phone }); 
    return res
  }

  async register(phone,pwd){
      let res=await this.app.mysql.insert('users', { phone, pwd})
      return res
  }

  async login(phone,pwd){
    let res=await this.app.mysql.get('users', { phone ,pwd}); 
    return res
  }

  async add(uname,phone,label,role,idCard,address,follow,company,time){
    let res=await this.app.mysql.insert('list', { uname,phone,label,role,idCard,address,follow,company,time })
    return res
  }
}

module.exports = UserService;
