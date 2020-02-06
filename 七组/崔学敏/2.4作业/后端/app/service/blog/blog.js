'use strict';

const Service = require('egg').Service;

class BlogService extends Service {
    //添加
    async add(title, content, isdefault,uid) {
        let sql = `insert into addlist (title,content,isdefault,uid) values ('${title}','${content}','${isdefault}','${uid}')`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    //删除
    async del(id) {
        let sql = `delete from addlist where id=${id}`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    // //编辑
    async update(id, title, content, isdefault) {
        let sql = `update addlist set title='${title}',content='${content}',isdefault='${isdefault}' where id=${id}`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    // //获取数据
    async list(){
        let sql=`select * from addlist`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    // //查询
    // async search(search){
    //     let sql=`select * from addlist where name like '%${search}%'`;
    //     let res = await this.app.mysql.query(sql);
    //     return res;
    // }
}

module.exports = BlogService;
