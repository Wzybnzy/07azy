'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    //判断当前用户是否存在
    async getuser(name) {
        let sql = `select * from yquser where name='${name}'`
        let res = await this.app.mysql.query(sql);
        return res;
    }
    //注册
    async registry(name, pwd) {
        let sql = `insert into yquser (name,pwd) values ('${name}','${pwd}')`
        let res = await this.app.mysql.query(sql);
        return res;
    }
    //登录
    async login(name,pwd){
        let sql = `select * from yquser where name='${name}' and pwd='${pwd}'`
        let res = await this.app.mysql.query(sql);
        return res;
    }
}

module.exports = UserService;
 