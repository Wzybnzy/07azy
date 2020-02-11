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

  // 身份
  async userRole(uId) {
    let roleId = `select role_id from roleid where uId=${uId}`;
    let sql = `select role_name from role where id in (${roleId})`;
    let res = await this.app.mysql.query(sql);
    return res;
  }

  // 权限
  async userLimit(uId) {
    let roleId = `select role_id from roleid where uId=${uId}`;
    let limitId = `select limit_id from limit_id where role_id in (${roleId})`;
    let sql = `select * from limit_url where id in (${limitId})`;
    let res = await this.app.mysql.query(sql);
    return res;
  }

}

module.exports = UserService;
