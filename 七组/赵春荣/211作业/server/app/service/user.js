'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async registry(name, pwd) {
        const $sql = `insert into user (name,pwd) values ('${name}','${pwd}')`;
        const result = await this.app.mysql.query($sql);
        return result;
    }
    async getuser(name) {
        const $sql = `select * from user where name='${name}'`;
        const result = await this.app.mysql.query($sql);
        return result;
    }
    async login(name, pwd) {
        const $sql = `select * from user where name='${name}' and pwd='${pwd}'`;
        const result = await this.app.mysql.query($sql);
        return result;
    }
    async getuserpower(id) {
        const roleid = `select role_id from user_role where user_id='${id}'`;
        const powerid = `select power_id from role_power where role_id in(${roleid})`;
        const $sql = `select * from power where id in (${powerid})`;
        const result = await this.app.mysql.query($sql);
        return result;
    }
    async getuserinfo(id) {
        const roleid = `select role_id from user_role where user_id='${id}'`;
        const $sql = `select role_name from role where id in (${roleid})`;
        const result = await this.app.mysql.query($sql);
        return result;
    }
}

module.exports = UserService;
