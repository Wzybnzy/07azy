'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async ishave(phone) {
    let res=await this.app.mysql.get('users', { phone }); 
    return res
  }

  async register(phone,pwd){
      let res=await this.app.mysql.insert('users', { phone, pwd})
      return res
  }

  async login(phone,pwd){
    let res=await this.app.mysql.get('users', { phone ,pwd}); 
    return res
  }

  async add(uname,phone,label,role,idCard,address,follow,company){
    let res=await this.app.mysql.insert('list', { uname,phone,label,role,idCard,address,follow,company,time:this.app.mysql.literals.now })
    return res
  }

  async del(id){
    let arr=id.split(",")
    let res=await this.app.mysql.delete("list",{id:arr})
    return res
  }
  
  async getlist(page,limit){
    let start=(page-1)*limit
    let sql=`select * from list limit ${start},${limit}`
    let res=await this.app.mysql.query(sql)
    let sql1=`select count(*) from list`
    let count=await this.app.mysql.query(sql1)
    
    return {
      res,
      count:count[0]['count(*)']

    }
  }
  
}

module.exports = UserService;
