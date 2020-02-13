'use strict';

const Service = require('egg').Service;

class ZsService extends Service {
    //查询指定只是库是否有此文件
  async getknow(title,sid) {
    let res=await this.app.mysql.query(`select * from wordlist where title='${title}' and sid='${sid}'`)
    return res
  }
//添加  
  async add(title,con,sid,time){
    let res=await this.app.mysql.query('insert into wordlist (title,con,sid,time) values (?,?,?,?)',[title,con,sid,time])
    return res
    }

    //删除
    async delfn(id){
        let res=await this.app.mysql.query(`delete from wordlist where id="${id}"`)
        return res
    }

    
    //编辑

    async updatafn(id,title,con){
      console.log(id,title,con,sid,"888888")
      let sql=`update wordlist set title='${title}',con='${con}' where id='${id}'`;
      let res=await this.app.mysql.query(sql);
      return res;
    }

    async list(){
      let sql=`select * from wordlist`
      let res=await this.app.mysql.query(sql)
        return res
    }
}

module.exports = ZsService;
