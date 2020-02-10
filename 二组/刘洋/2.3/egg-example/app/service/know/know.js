'use strict';

const Service = require('egg').Service;

class KnowService extends Service {
  async creatknow(uid,kname,kintro,isshow) {
    let sql=`insert into kownlist_yuque (uid,kname,kintro,isshow) values ('${uid}','${kname}','${kintro}','${isshow}')`
    let res=await this.app.mysql.query(sql)
    return res
  }
}

module.exports = KnowService;
