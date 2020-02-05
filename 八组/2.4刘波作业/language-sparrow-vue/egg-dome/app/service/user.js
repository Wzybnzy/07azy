const Service = require('egg').Service;

class DemoService extends Service {
  //查找用户
  async selectUser(username){
    return await this.app.mysql.query("select * from userlist where username=?",[username])
  }
  //注册
  async register(username,password) {
    return await this.app.mysql.query("insert into userlist (username,password) values (?,?) ",[username,password])
  }
  //登录
  async login(username,password){
    return await this.app.mysql.query("select * from userlist where username=? and password=?",[username,password])
  }
  //修改简介
  async uddataJianjie(username,password,jianjie,id){
    return await this.app.mysql.query("update userlist set username=?,password=?,jianjie=? where id=?",[username,password,jianjie,id])
  }
}

module.exports = DemoService;