'use strict';

const Service = require('egg').Service;

class IndexService extends Service {
    async getuser(name) {
        let sql = `select * from user where name = '${name}'`
        let res = await this.app.mysql.query(sql)
        return res
    }
    async register(name, pwd) {
        let sql = `insert into user (name,pwd) values ('${name}','${pwd}')`
        let res = await this.app.mysql.query(sql)
        return res
    }
    async login(name,pwd){
        let sql = `select * from user where name = '${name}' and pwd='${pwd}'`
        let res = await this.app.mysql.query(sql)
        return res
    }
    async getusert(uid){
        let roleid = `select roleid from roleuser where uid = '${uid}'`
        let sql = `select rolename from role where id in (${roleid})`
        let res = await this.app.mysql.query(sql)
        return res
    }
}

module.exports = IndexService;
