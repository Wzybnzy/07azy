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
 
}

module.exports = service;
