'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getuser(stu) {
        let res = await this.app.mysql.query(`select * from user where stu='${stu}'`)
        return res
  }
  async login(stu,pwd) {
    let res = await this.app.mysql.query(`select * from user where stu='${stu}' and pwd='${pwd}'`)
    return res
}
async registry(name,pwd,stu) {
    let sql = `insert into user (name,pwd,stu) values ('${name}','${pwd}','${stu}')`
    let res = await this.app.mysql.query(sql)
    return res
}
}

module.exports = UserService;
