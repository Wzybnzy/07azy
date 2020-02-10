'use strict';

const Service = require('egg').Service;

class KnowService extends Service {
    async add(obj) {
        let { knowname, knowjj, isshow, uid } = obj
        let sql = `insert into know (knowname,knowjj,isshow,uid) values ('${knowname}','${knowjj}','${isshow}','${uid}')`
        let res = await this.app.mysql.query(sql)
        return res
    }
    async list(uid){
        let sql = `select * from know where uid = '${uid}'`
        let res = await this.app.mysql.query(sql)
        return res
    }
    async del(uid,id){
        let sql = `delete from know where uid='${uid}' and id= '${id}'`
        let res = await this.app.mysql.query(sql)
        return res 
    }
    async update(obj){
        let { knowname, knowjj, isshow, uid ,id} = obj
        let sql = `update know set knowname='${knowname}',knowjj='${knowjj}',isshow='${isshow}',uid='${uid}' where id = '${id}'`
        let res = await this.app.mysql.query(sql)
        return res
    }
}

module.exports = KnowService;
