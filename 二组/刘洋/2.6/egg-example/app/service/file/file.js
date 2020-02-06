'use strict';

const Service = require('egg').Service;

class FileService extends Service {
    async createdoc(kid,uid,fname,fcont,isshow) {
        let sql=`insert into filelist_yuque (kid,uid,fname,fcont,isshow) values ('${kid}','${uid}','${fname}','${fcont}','${isshow}')`
        let res=await this.app.mysql.query(sql)
        return res
      }
    
      async deldoc(fid){
        let sql=`delete from filelist_yuque where id=${fid}`
        let res=await this.app.mysql.query(sql)
        return res
      }
    
      async updatedoc(fid,fname,fcont,isshow){
        let sql=`update filelist_yuque set isshow='${isshow}',fname='${fname}',fcont='${fcont}' where id=${fid}`
        let res=await this.app.mysql.query(sql)
        return res
    }
       
        async doclist(uid){
            let sql=`select * from filelist_yuque where uid=${uid}`
            let res=await this.app.mysql.query(sql)
            for(let i=0;i<res.length;i++){
              let sql1=`select name from userlist_yuque where id=${res[i].uid}`
              let res1=await this.app.mysql.query(sql1)
              res[i].uname=res1[0].name
              let sql2=`select know_name from kownlist_yuque where id=${res[i].kid}`
              let res2=await this.app.mysql.query(sql2)
              res[i].kname=res2[0].know_name
            }
            return res
        }

        async search(input,uid){
          let sql=`select * from filelist_yuque where fname like '%${input}%' or fcont like '%${input}%' and isshow=1 or fname like '%${input}%' or fcont like '%${input}%' and uid=${uid}`
          let res=await this.app.mysql.query(sql)
          for(let i=0;i<res.length;i++){
            let sql1=`select name from userlist_yuque where id=${res[i].uid}`
            let res1=await this.app.mysql.query(sql1)
            res[i].uname=res1[0].name
            let sql2=`select know_name from kownlist_yuque where id=${res[i].kid}`
            let res2=await this.app.mysql.query(sql2)
            res[i].kname=res2[0].know_name
          }
          return res
        }


        async kdoclist(kid){
          let sql=`select * from filelist_yuque where kid=${kid}`
          let res=await this.app.mysql.query(sql)
          return res
        }
}

module.exports = FileService;
