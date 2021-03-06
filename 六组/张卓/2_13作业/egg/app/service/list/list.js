'use strict';

const Service = require('egg').Service;

class ListService extends Service {
    async getuser(name){
         let sql = `select * from list where name='${name}'`;
         let res = await this.app.mysql.query(sql);
        return res
    }
    async addlist(obj){
        let {name,phone,card,address,label,followup,role} = obj;   
         let sql =  `insert into list (name,phone,card,address,label,followup,role,time) values ('${name}','${phone}','${card}','${address}','${label}','${followup}','${role}',now()) `;
         let res = await this.app.mysql.query(sql);
        // let res = await this.app.myspl.insert("list",{
        //     name,phone,card,address,label,followup,role,time:this.app.myspl.literals.now
        // })
        // console.log(res);
        return res
    }
    async dellist(id) {
        let sql = `delete from list where id=${id}` 
        let res = await this.app.mysql.query(sql)
        return res
    }
    async getlist(page,limit){
        let start = (page-1) * limit
        let sql = `select * from list limit ${start}, ${limit}`
        let res = await this.app.mysql.query(sql)
        let sql1 = `select count(*) from list`
        let count = await this.app.mysql.query(sql1)
        return {
            total:count[0]['count(*)'],
            data:res
        }
    }
}

module.exports = ListService;