'use strict';

const Service = require('egg').Service;

class UserService extends Service {
   async getuser(name) {
    let sql=`select * from user where name='${name}'`;
    let res=await this.app.mysql.query(sql);
    return res;
  }
  async login(name,pwd){
    let sql=`select * from user where name='${name}' and pwd='${pwd}'`;
    let res=await this.app.mysql.query(sql);
    return res;
  }
  async registry(name,pwd){
    let sql=`insert into user (name,pwd) values ('${name}','${pwd}')`;
    let res=await this.app.mysql.query(sql);
    return res;
  }
  async getmes(uid){
    let rid=`select rid from userrole where uid=${uid}`;
    let sql=`select role_name from role where id in (${rid})`
    let res=await this.app.mysql.query(sql);
    return res;
  }

  async getlist(uid){
    let rid=`select rid from userrole where uid=${uid}`;
    let pid = `select pid from userpower where rid in (${rid})`;
    let sql = `select * from pro where id in (${pid})`;
    let res=await this.app.mysql.query(sql);
    return res;
  }
}

module.exports = UserService;
