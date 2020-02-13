'use strict';

const Service = require('egg').Service;

class ZsService extends Service {
  async add(s_name,s_phone,bq,yh,sf,address) {
      return await this.app.mysql.insert("zs",{s_name,s_phone,bq,yh,sf,address})
  }
  async getname(s_name){
      let sql=`select * from zs where s_name='${s_name}'`;
      let res=await this.app.mysql.query(sql)
      return res
  }

  async del(id){
      let sql=`delete from zs where id=${id}`;
      let res=await this.app.mysql.query(sql)
      return res
  }

  async list(){
      return await this.app.mysql.select("zs")
  }
}

module.exports = ZsService;
