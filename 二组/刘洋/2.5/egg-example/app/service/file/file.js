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
       
        async doclist(){
            let sql=`select * from filelist_yuque`
            let res=await this.app.mysql.query(sql)
            return res
        }
}

module.exports = FileService;
