'use strict';

const Service = require('egg').Service;

class ListService extends Service {
async getuser(name){
    let sql=`select * from list where name='${name}'`;
    let res=await this.app.mysql.query(sql);
    return res;
}
  async addlist(name,phone,card,address,lable,followup,role) {
      let sql=`insert into list (name,phone,card,address,lable,followup,role,time) values ('${name}','${phone}','${card}','${address}','${lable}','${followup}','${role}',now())`;
      let res=await this.app.mysql.query(sql);
    return res;

  }
  async del(id){
      let arr=id.split(',');
     let res=await this.app.mysql.delete('list',{id:arr});
    return res;
  }
  async getlist(page,limit){
let start=(page-1)*limit;
let sql=`select * from list limit ${start}, ${limit}`;
let res=await this.app.mysql.query(sql);
let sql1=`select count(*) from list`;//查询表里面一共多少条数据  聚合函数
let count =await this.app.mysql.query(sql1);
return {
    total:count[0]['count(*)'],
    data:res
}
  }
}

module.exports = ListService;
