'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    //获取所以用户数据
  async getuser(name) {
    //  return await this.ctx.mysql.query(`select * from user where name="${name}"`)
     let sql = `select * from user where name='${name}'`;
        let res = await this.app.mysql.query(sql);
        return res;
  }
    //注册用户
  async registry(name,pwd){
    let sql= `insert into user (name,pwd) values ('${name}','${pwd}')` 
    let res = await this.app.mysql.query(sql)
    return  res
  }
    //登录用户
    async login(name,pwd){
        let sql = `select * from user where name='${name}' and pwd='${pwd}'`
        return await this.app.mysql.query(sql)
    }
    //
    // user_role uid用户id  rid角色的id
    async getuserinfo(uid) {
        let rid = `select rid from user_role where uid='${uid}'`
        console.log(rid,"27rid");
        let sql = `select r_name from role where id in (${rid})`;
        console.log(sql,"29sql");
        let res = await this.app.mysql.query(sql);
        return res;
    }
    async getlist(uid){
       let rid = `select rid from user_role where uid='${uid}'` 
       let pid = `select pid from role_power where rid in (${rid})`
       let sql = `select * from power where id in (${pid})`;
       
       let res = await this.app.mysql.query(sql)
       return res
    }
    
}

module.exports = UserService;
