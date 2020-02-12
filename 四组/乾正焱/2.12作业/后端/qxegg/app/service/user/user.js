'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    // 判断该用户是否已经注册了
    async getinfo(name) {
        let sql = `select * from user where name='${name}'`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    // 注册
    async registry(name, pwd) {
        let sql = `insert into user (name,pwd) values ('${name}','${pwd}')`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    // 登录
    async login(name, pwd) {
        let sql = `select * from user where name='${name}' and pwd='${pwd}'`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    // 获取该用户的角色
    async userrole(uid){
        let role_id = `select role_id from user_role where uid='${uid}'`;
        let sql = `select * from role where id in (${role_id})`
        let res = await this.app.mysql.query(sql);
        return res;
    }
    // 获取用户权限
    async userpower(uid){
        let role_id = `select role_id from user_role where uid='${uid}'`
        let power_id = `select power_id from role_power where role_id in (${role_id})`
        let power = `select * from power where id in (${power_id})`
        let res = await this.app.mysql.query(power);
        return res;
    }
}

module.exports = UserService;
