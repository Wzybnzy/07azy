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

   async getuserinfo(uid){
       let rid=`select rid from user_role where uid=${uid}`
    //    console.log(rid,"11111111111111111")
       let res=await this.app.mysql.query(`select r_name from role where id in (${rid})`)
    //    console.log(res,"222222222222222222")
       return res
   }

   async getlist(uid){
       let rid=`select rid from user_role where uid=${uid}`
       let pid=`select pid from role_power where rid in (${rid})`
       let res=await this.app.mysql.query(`select * from power where id in (${pid})`)
    //    console.log(res)
       return res

   }
}

module.exports = service;
