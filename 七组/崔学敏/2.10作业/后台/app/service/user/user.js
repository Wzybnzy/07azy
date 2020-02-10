'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async getuser(name) {
        let sql = `select * from userL where name='${name}'`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    async registry(name, pwd) {
        let sql = `insert into userL (name,pwd) values ('${name}','${pwd}')`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    async login(name, pwd) {
        let sql = `select * from userL where name='${name}' and pwd='${pwd}'`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    async getuserinfo(uid){
        let rid=`select rid from user_role where uid=${uid}`;
        let sql=`select r_name from role where id in (${rid})`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
}

module.exports = UserService;
