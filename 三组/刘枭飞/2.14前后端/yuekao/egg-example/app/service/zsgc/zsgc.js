'use strict';

const Service = require('egg').Service;

class ZsgcService extends Service {
  async add(name, iphone, biaoqian, sf, sfz, msg, djjl) {
    let sql = `insert into zsgc (name, iphone, biaoqian, sf, sfz, msg, djjl,time) values ('${name}','${iphone}','${biaoqian}','${sf}','${sfz}','${msg}','${djjl}',now())`
    let res = await this.app.mysql.query(sql);
    return res;
  }
  async list() {
    let sql = `select * from zsgc`
    let res = await this.app.mysql.query(sql)
    return res;
  }
  async del(id) {
    let ids = id.split(",")
    let res = await this.app.mysql.delete("zsgc", { id: ids })
    return res
  }
  async select(start, page) {
    let sql = `select * from zsgc limit ${(start - 1) * page},${page}`
    let res = await this.app.mysql.query(sql)
    let sql1 = `select count(*) from zsgc`
    let data = await this.app.mysql.query(sql1);
    let len = data[0]['count(*)']
    let dats = [
      ...res,
    ]
    return { dats, len }
  }
}

module.exports = ZsgcService;
