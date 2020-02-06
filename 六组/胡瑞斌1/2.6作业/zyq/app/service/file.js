'use strict';

const Service = require('egg').Service;

class KnowService extends Service {
    async add(obj) {
        let { filename, fileinfo, isshow, uid, knowid } = obj
        let sql = `insert into file (filename,fileinfo,isshow,uid,knowid) values ('${filename}','${fileinfo}','${isshow}','${uid}',${knowid})`
        let res = await this.app.mysql.query(sql)
        return res
    }
    async list(uid) {
        let sql = `select * from file where uid = '${uid}'`
        let res = await this.app.mysql.query(sql)
        for (let i = 0; i < res.length; i++) {
            let { uid, knowid } = res[i]
            let sql1 = `select name from user2 where id = '${uid}'`
            let username = await this.app.mysql.query(sql1)
            res[i].username = username[0].name
            let sql2 = `select knowname from know where id = '${knowid}'`
            let knowname = await this.app.mysql.query(sql2)
            res[i].knowname = knowname[0].knowname
        }
        return res
    }
    async del(uid, id) {
        let sql = `delete from file where uid='${uid}' and id= '${id}'`
        let res = await this.app.mysql.query(sql)
        return res
    }
    async update(obj) {
        let { filename, fileinfo, isshow, uid, id } = obj
        let sql = `update file set filename='${filename}',fileinfo='${fileinfo}',isshow='${isshow}',uid='${uid}' where id = '${id}'`
        let res = await this.app.mysql.query(sql)
        return res
    }
    async search(search){
        let sql = `select * from file where filename like '${search}' or fileinfo like '${search}' and isshow='1'`
        let res = await this.app.mysql.query(sql)
        return res
    }
    async detail (uid,knowid){
        let sql = `select * from file where uid = ${uid} and knowid='${knowid}'`
        let res = await this.app.mysql.query(sql)
        return res
    }
}

module.exports = KnowService;
