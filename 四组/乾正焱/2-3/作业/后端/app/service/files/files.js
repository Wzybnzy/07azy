'use strict';

const Service = require('egg').Service;

class FilesService extends Service {
    async add(file_title,file_con,uid,kid) {
        let sql = `insert into files (file_title,file_con,uid,kid) values ('${file_title}','${file_con}','${uid}','${kid}')`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    async updata(file_title,file_con,uid,id) {
        let sql = `update files set file_title='${file_title}' , file_con='${file_con}' where uid=${uid} and id=${id}`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    async delete(uid,id) {
        let sql = `delete from files where uid='${uid}' and id='${id}'`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    async list(uid) {
        let sql = `select * from files where uid='${uid}'`;
        let res = await this.app.mysql.query(sql);
        return res;
    }

    async detail(uid,kid) {
        let sql = `select * from files where uid='${uid}' and kid = '${kid}'`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    async search(search){
        let sql = `select * from files where file_title like '%${search}%' or file_con like '%${search}%'`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
}

module.exports = FilesService;
