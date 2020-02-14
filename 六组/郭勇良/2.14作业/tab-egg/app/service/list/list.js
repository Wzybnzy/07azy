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
//   async getlist(){
//     let sql=`select * from list`
//     let res = await this.app.mysql.query(sql)
//    return res
//  }
async getlist(page,limit){
      let start = (page -1) * limit;
      let sql = `select * from list limit ${start}, ${limit}`;
      let res = await this.app.mysql.query(sql);

      let sql1 = `select count(*) from list`; 
      let count = await this.app.mysql.query(sql1);

    return {
        total:count[0]['count(*)'],
        data:res
    };
}
}

module.exports = ListService;
