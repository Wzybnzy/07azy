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

    async getlist(name){
        let res=await this.app.mysql.get("list",{name})
        return res
    }

    async addlist(obj){
        let {name,phone,card,address,lable,followup,role}=obj

        let res=await this.app.mysql.insert("list",{name,phone,card,address,lable,followup,role,time:this.app.mysql.literals.now})
        return res
    }

    async dellist(id){
        let arr=id.split(",")
        let res=await this.app.mysql.delete("list",{id:arr})
        return res
    }

    async list(page,limit){
        let start=(page-1)*limit
        let res=await this.app.mysql.query(`select * from list limit ${start},${limit}`)
        let count=await this.app.mysql.query(`select count(*) from list`)
         return{
             totle:count[0]["count(*)"],
             data:res
        }
    }
}

module.exports = service;
