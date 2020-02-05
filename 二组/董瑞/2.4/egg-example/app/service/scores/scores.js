'use strict';

const Service = require('egg').Service;

class ScoresService extends Service {
  async getscores(name) {
    let sql = `select * from scores where name='${name}'`
    let res = await this.app.mysql.query(sql)
    return res

}
async add(obj) {
    let {name,lilun,jineng} = obj
    let sql = `insert into scores (name,lilun,jineng) values ('${name}','${lilun}','${jineng}')`
    let res = await this.app.mysql.query(sql)
    return res

}
async getscores(id) {
    let sql = `delete * from scores where id='${id}'`
    let res = await this.app.mysql.query(sql)
    return res

}
async updata(obj) {
    let {id,name,lilun,jineng} = obj
    let sql = `updata scores set name='${name}',lilun='${lilun}',jineng='${jineng}' where id =${id}`                                                                                                                                                                                                                                                                                                                                    
    let res = await this.app.mysql.query(sql)
    return res

}
async list(search){
    let sql = `select * scores where name like '%${search}%'`
    let res= await this.app.mysql.query(sql)
    return res
}
}

module.exports = ScoresService;
