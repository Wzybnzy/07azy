'use strict';

const Service = require('egg').Service;

class service extends Service {
    async getuser(name){
        let res=await this.app.mysql.query(`select * from yuque where name="${name}"`)
        return res
    }

    async login(name,pwd){
        let res=await this.app.mysql.query(`select * from yuque where name="${name}" and pwd="${pwd}"`)
        return res
    }

    async register(name,pwd){
        let res=await this.app.mysql.query(`insert into yuque (name,pwd) values ("${name}","${pwd}")`)
        return res
    }

    async add(obj){
        let {name,info,isshow,uid}=obj
        let res=await this.app.mysql.query(`insert into yuque_zsgc (name,info,isshow,uid) values ("${name}","${info}","${isshow}","${uid}")`)
        return res
    }

    async del(obj){
        let {uid,id}=obj
        let res=await this.app.mysql.query(`delete from yuque_zsgc where id="${id}" and uid="${uid}"`)
        return res
    }

    async updata(obj){
        let {name,info,isshow,uid,id}=obj
        let res=await this.app.mysql.query(`update yuque_zsgc set name="${name}",info="${info}",isshow="${isshow}" where id="${id}" and uid="${uid}"`)
        return res
    }

    async list(uid){
        let res=await this.app.mysql.query(`select * from yuque_zsgc where uid="${uid}"`)
        return res
    }
 
}

module.exports = service;
