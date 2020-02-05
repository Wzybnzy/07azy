'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async getuser(name) {
        const $sql = `select * from yvqueuser where name='${name}'`;
        const result = await this.app.mysql.query($sql);
        return result;
    }
    async registry(name, pwd) {
        const $sql = `insert into yvqueuser (name,pwd) values ('${name}','${pwd}')`;
        const result = await this.app.mysql.query($sql);
        return result;
    }
    async login(name, pwd) {
        const $sql = `select * from yvqueuser where name='${name}' and pwd='${pwd}'`;
        const result = await this.app.mysql.query($sql);
        return result;
    }
    async addknow(zisiku_name, zisiku_info, isshow, uid) {
        const $sql = `insert into zhishiku (zisiku_name, zisiku_info, isshow, uid) values ('${zisiku_name}','${zisiku_info}','${isshow}','${uid}')`;
        const result = await this.app.mysql.query($sql);
        return result;
    }
    async updateknow(zisiku_name, zisiku_info, isshow, uid, id) {
        const $sql = ` update zhishiku  set zisiku_name='${zisiku_name}', zisiku_name='${zisiku_name}', isshow='${isshow}', uid='${uid}' where id='${id}'`;
        const result = await this.app.mysql.query($sql);
        return result;
    }
    async delknow(id) {
        const $sql = `delete from zhishiku where id='${id}'`;
        const result = await this.app.mysql.query($sql);
        return result;
    }
    async getknow() {
        const $sql = `select * from zhishiku`;
        const result = await this.app.mysql.query($sql);
        return result;
    }
}

module.exports = UserService;
