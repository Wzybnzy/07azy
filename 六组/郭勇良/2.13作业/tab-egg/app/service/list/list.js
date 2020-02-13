'use strict';

const Service = require('egg').Service;

class ListService extends Service {
  async addlist(name,phone,label,role,card,address,followup) {
    
    let sql = `insert into list (name,phone,label,role,card,address,followup,time) values ('${name}','${phone}','${label}','${role}','${card}','${address}','${followup}',now())`
    let res = await this.app.mysql.query(sql)
    return res
  }
  async dellist(id){
     let sql=`delete from list where id='${id}'`
     let res = await this.app.mysql.query(sql)
     return res
  }
  async getlist(){
    let sql=`select * from list`
    let res = await this.app.mysql.query(sql)
   return res
 }
}

module.exports = ListService;
