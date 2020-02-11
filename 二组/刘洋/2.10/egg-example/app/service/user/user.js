'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async ishave(name) {
    let sql=`select * from user_huiyi where name='${name}'`
    let res=await this.app.mysql.query(sql)
    // console.log(res)
    return  res
  }

  async register(name,pwd){
    let sql=`insert into user_huiyi (name,pwd,statu) values ('${name}','${pwd}',3)`
    let res=await this.app.mysql.query(sql)
    return res
  }

  async login(name,pwd){
    //   console.log(name,pwd)
    let sql=`select * from user_huiyi where name='${name}' and pwd='${pwd}'`
    let res=await this.app.mysql.query(sql)
    return res
  }

  async statu(statu_id){
    let sql0=`select statu_name from statu_huiyi where statu_id=${statu_id}`
    let res0=await this.app.mysql.query(sql0)
    let sql=`select pid from statu_huiyi where statu_id=${statu_id}`  
    let sql2=`select * from power_huiyi where id in (${sql})`
    let res=await this.app.mysql.query(sql2)
    console.log(res)
    return {
        statu:res0[0].statu_name,
        res
    }
  }
}

module.exports = UserService;
