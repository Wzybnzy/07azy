'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async getuser(name){
        let sql=`select * from user where name='${name}'`;
        let res=await this.app.mysql.query(sql);
        return res;
    }
    async registry(name,pwd){
        let sql=`insert into user (name,pwd) values ('${name}','${pwd}')`;
        let res=await this.app.mysql.query(sql);
        return res;
    }
    async login(name,pwd){
        let sql=`select * from user where name='${name}' and pwd='${pwd}'`;
        let res=await this.app.mysql.query(sql);
        return res;
    }
    async userinfo(uid){
        let sql=`select rid from user_role where uid='${uid}'`;
        let data=`select work from role where id in (${sql})`;
        let res=await this.app.mysql.query(data);
        return res;
    }
    async userpower(uid){
        let rid=`select rid from user_role where uid='${uid}'`;
        let pid=`select pid from user_power where rid in (${rid})`;
        let sql=`select leftname from power where id in (${pid})`;
        let res=await this.app.mysql.query(sql);
        return res;
    }
}

module.exports = UserService;