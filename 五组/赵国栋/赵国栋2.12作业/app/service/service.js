'use strict';

const Service = require('egg').Service;

class service extends Service {
    async getuser(phone){
        let res=await this.app.mysql.get("user",{phone})
        return res
    }

    async login(phone,pwd){
        let res=await this.app.mysql.select("user",{phone,pwd})
        return res
    }

    async register(phone,pwd){
        let res=await this.app.mysql.insert("user",{phone,pwd})
        return res
    }
}

module.exports = service;
