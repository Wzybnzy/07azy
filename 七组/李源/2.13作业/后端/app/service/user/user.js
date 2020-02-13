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
  async getuserinfo(uid){
    let rid=`select rid from user_role where uid=${uid}`
    let sql=`select r_name from role where id in(${rid})`  //in查询返回值为数组的字段  id是相当与key名 in后面的rid相当于value
    let res=await this.app.mysql.query(sql)
    return res;
  }
  async getlist(uid){
    let rid=`select rid from user_role where uid=${uid}`
    let pid=`select pid from role_power where rid in (${rid})`
    let sql=`select * from power where id in (${pid}) `
    let res=await this.app.mysql.query(sql)
    return res;
  }
}

module.exports = UserService;