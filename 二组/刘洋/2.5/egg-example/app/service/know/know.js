'use strict';

const Service = require('egg').Service;

class KnowService extends Service {
  //新建数据库
  async creatknow(uid,kname,kintro,isshow) {
    let sql=`insert into kownlist_yuque (kown_uid,know_name,know_intro,isshow) values ('${uid}','${kname}','${kintro}','${isshow}')`
    let res=await this.app.mysql.query(sql)
    return res
  }
  //删除数据库
  async relknow(kid){
    let sql=`delete from kownlist_yuque where id=${kid} `
    let res=await this.app.mysql.query(sql)
    return res
  }
  //修改数据库
  async updateknow(knowid,kname,kintro,isshow){
    let sql=`update kownlist_yuque set know_name='${kname}',know_intro='${kintro}',isshow='${isshow}' where id='${knowid}'`
    let res=await this.app.mysql.query(sql)
    return res
  }
  //数据库列表
  async knowlist(uid){
    let sql=`select * from kownlist_yuque where kown_uid =${uid}`
    let res=await this.app.mysql.query(sql)
    return res
  }

  //获取知识库名
  async getkname(kid){
    let sql=`select know_name from kownlist_yuque where id=${kid}`
    let res=await this.app.mysql.query(sql)
    return res
  }
}

module.exports = KnowService;
