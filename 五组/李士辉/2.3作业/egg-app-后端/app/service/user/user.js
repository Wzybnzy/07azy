'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUser(name) {
    let sql = `SELECT * FROM USER WHERE NAME='${name}'`;
    let res = await this.app.mysql.query(sql);
    return res;
  }
  async login(name,pwd){
    let sql = `SELECT * FROM USER WHERE NAME='${name}' AND PWD='${pwd}'`;
    let res = await this.app.mysql.query(sql);
    return res;
  }
  async registry(name,pwd){
    let sql = `INSERT INTO USER (NAME,PWD) VALUES ('${name}','${pwd}')`;
    let res = await this.app.mysql.query(sql);
    return res;
  }
}

module.exports = UserService;
