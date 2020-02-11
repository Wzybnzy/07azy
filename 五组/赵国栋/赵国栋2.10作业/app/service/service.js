'use strict';

const Service = require('egg').Service;

class service extends Service {
    async getuser(name){
        let res=await this.app.mysql.query(`select * from user where name="${name}"`)
        return res
    }

    async login(name,pwd){
        let res=await this.app.mysql.query(`select * from user where name="${name}" and pwd="${pwd}"`)
        return res
    }

    async register(name,pwd){
        let res=await this.app.mysql.query(`insert into user (name,pwd) values ("${name}","${pwd}")`)
        return res
    }

//    async getuserinfo(uid){
//        let rid=`select rid from user_role where uid=${uid}`
//        let res=await this.app.mysql.query(`select r_name from role where id in (${rid})`)
//        return res
//    }
}

module.exports = service;
