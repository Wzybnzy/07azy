'use strict';

const Service = require('egg').Service;

class KnowService extends Service {
    async getuser(uid){
        let sql=`select * from user where id='${uid}'`;
        let res=await this.app.mysql.query(sql);
        return res;
    }
    async add(knowtit,knowcon,isshow,uid){
        let sql=`insert into know (knowtit,knowcon,isshow,uid) values ('${knowtit}','${knowcon}','${isshow}','${uid}')`;
        let res=await this.app.mysql.query(sql);
        return res;
    }
    async del(id){
        let sql=`delete from know where id='${id}'`;
        let res=await this.app.mysql.query(sql);
        return res;
    }
    async getid(id){
        let sql=`select * from know where id='${id}'`;
        let res=await this.app.mysql.query(sql);
        return res;
    }
    async edit(knowtit,knowcon,isshow,id){
      console.log(knowtit,knowcon,isshow,id)
        let sql=`update know set knowtit='${knowtit}',knowcon='${knowcon}',isshow='${isshow}' where id='${id}'`;
        let res=await this.app.mysql.query(sql);
        return res;
    }
    async search(val){
        let sql=`select * from know where knowtit like '%${val}%'`;
        let res=await this.app.mysql.query(sql);
        return res;
    }
    async list(){
        let sql=`select * from know`;
        let res=await this.app.mysql.query(sql);
        return res;
    }

}

module.exports = KnowService;
