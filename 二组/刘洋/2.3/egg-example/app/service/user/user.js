'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    //登陆
  async login(name,pwd) {
    let sql=`select * from userlist_yuque where name='${name}' and pwd='${pwd}'`
    let res=await this.app.mysql.query(sql)
    return res
  }
  //注册
  async register(name,pwd) {
    let sql=`insert into userlist_yuque (name,pwd) values ('${name}','${pwd}')`
    let res=await this.app.mysql.query(sql)
    return res
  }
  //验证是否存在此用户
  async ishave(name,pwd){
    let sql=`select * from userlist_yuque where name='${name}'`
    let res=await this.app.mysql.query(sql)
    return res
  }

  //新建数据库
  async creatknow(uid,kname,kintro,isshow){
    let sql=`insert into kownlist_yuque (uid,kname,kintro,isshow) values ('${uid}','${kname}','${kintro}','${isshow}')`
    let res=await this.app.mysql.query(sql)
    return res
  }
}

module.exports = UserService;
