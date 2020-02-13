'use strict';

const Service = require('egg').Service;

class UserService extends Service {

  // 查找
  async find(obj) {
    let res = await this.app.mysql.get('user', obj);
    return res;
  }

  // 注册
  async add(obj) {
    let res = await this.app.mysql.insert('user', obj);
    return res;
  }

}

module.exports = UserService;
