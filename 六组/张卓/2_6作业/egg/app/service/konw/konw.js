'use strict';

const Service = require('egg').Service;

class KonwService extends Service {
    async add(obj) {
        let { konw_name, konw_info, isshow, uid } = obj;
        let sql = `insert into konw (konw_name,konw_info,isshow,uid) values ('${konw_name}','${konw_info}','${isshow}',${uid})`;
        let res = await this.app.mysql.query(sql); 
        return res; 
    }
    async update(obj){
        let { konw_name, konw_info, isshow, uid,id } = obj;
        let sql = `update konw set konw_name='${konw_name}',konw_info='${konw_info}',isshow='${isshow}' where id=${id} and uid=${uid}`;
        let res = await this.app.mysql.query(sql);
        return res;
    }

    async delete(id,uid){
        let sql = `delete from konw where id=${id} and uid=${uid}`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    async list(uid){
        let sql = `select * from konw where uid=${uid}`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
}

module.exports = KonwService;