'use strict';

const Service = require('egg').Service;

class ServiceService extends Service {
  async getuser(name) {//该用户是否存在
    let sql=`select * from user where name='${name}'`
    let res=await this.app.mysql.query(sql)
    return res;
  }
  async register(name,pwd){//注册
    let sql=`insert into user (name,pwd) values ('${name}','${pwd}')`
    let res=await this.app.mysql.query(sql)
    return res;
  } 
  async login(name,pwd){//登录
    let sql=`select * from user where name='${name}' and pwd='${pwd}'`
    let res=await this.app.mysql.query(sql)
    return res;
  }

  async getuserinfo(uid){//用户身份
    let rid=`select rid from user_role where uid=${uid}`
    let sql=`select r_name from role where id in(${rid})`  //in查询返回值为数组的字段  id是相当与key名 in后面的rid相当于value
    let res=await this.app.mysql.query(sql)
    return res;
  }
  async getlist(uid){//用户权限列表
    let rid=`select rid from user_role where uid=${uid}`
    let pid=`select pid from role_power where rid in (${rid})`
    let sql=`select * from power where id in (${pid}) `
    let res=await this.app.mysql.query(sql)
    return res;
  }
}

module.exports = ServiceService;
