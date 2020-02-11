'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    //获取所以用户数据
  async getuser(name) {
    //  return await this.ctx.mysql.query(`select * from user where name="${name}"`)
     let sql = `select * from user where name='${name}'`;
        let res = await this.app.mysql.query(sql);
        return res;
  }
    //注册用户
  async registry(name,pwd){
    let sql= `insert into user (name,pwd) values ('${name}','${pwd}')` 
    let res = await this.app.mysql.query(sql)
    return  res
  }
    //登录用户
    async login(name,pwd){
        let sql = `select * from user where name='${name}' and pwd='${pwd}'`
        return await this.app.mysql.query(sql)
    }
    //
    async getuserinfo(uid) {
        let rid = `select rid from user_role where uid='${uid}'`
        let sql = `select r_name from role where id in (${rid})`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
}

module.exports = UserService;
