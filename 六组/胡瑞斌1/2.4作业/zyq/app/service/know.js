'use strict';

const Service = require('egg').Service;

class KnowService extends Service {
    async getuser(knowname) {
        let sql = `select * know where knowname ='${knowname}'`
        let res = await this.app.mysql.query(sql)
        return res
    }
    async add(obj) {
        let { knowname, knowjj, isshow, uid } = obj
        let sql = `insert into know (knowname,knowjj,isshow,uid) values ('${knowname}','${knowjj}','${isshow}','${uid}')`
        let res = await this.app.mysql.query(sql)
        return res
    }
}

module.exports = KnowService;
