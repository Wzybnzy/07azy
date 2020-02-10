'use strict';

const Service = require('egg').Service;

class KnowService extends Service {
    async add(obj) {
        console.log(obj)
        let {knowname, knowinfo, ischeck, uid } = obj;
        let sql = `insert into know (knowname,knowinfo,uid,ischeck) values ('${knowname}','${knowinfo}','${uid}','${ischeck}')`;
        let res = await this.app.mysql.query(sql);
        return res;

    }
    async update(obj){
        let { knowname, knowinfo, ischeck, uid,id } = obj;
        let sql = `update know set knowname='${knowname}',knowinfo='${knowinfo}',ischeck='${ischeck}' where id=${id} and uid=${uid}`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    async del(id,uid){
        let sql = `delete from know where id=${id} and uid=${uid}`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    async list(uid){
        let sql = `select * from know where uid=${uid}`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
}

module.exports = KnowService;
