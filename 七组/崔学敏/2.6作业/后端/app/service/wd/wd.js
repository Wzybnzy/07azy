'use strict';

const Service = require('egg').Service;

class WdService extends Service {
    //添加
  async add(file_name,file_info,uid,isdefault,zsk_id) {
    let sql=`insert into wd (file_name,file_info,uid,isdefault,zsk_id) values ('${file_name}','${file_info}','${uid}','${isdefault}','${zsk_id}')`;
    let res=await this.app.mysql.query(sql);
    return res;
  }
  //删除
  async del(id,uid){
      let sql=`delete from wd where id=${id} and uid=${uid}`;
      let res=await this.app.mysql.query(sql);
    return res;
  }
  //编辑
  async update(id,file_name,file_info,uid){
    let sql=`update wd set file_name='${file_name}',file_info='${file_info}' where id=${id} and uid=${uid}`;
    let res=await this.app.mysql.query(sql);
  return res;
}
//获取数据
async list(uid){
    let sql=`select * from wd where uid=${uid}`;
    let res=await this.app.mysql.query(sql);
    // for(let i=0;i<res.length;i++){
    //     let {uid,zsk_id}=res[i];
    //     let sql1=`select name from zc where id=${uid}`;
    //     let username=await this.app.mysql.query(sql1);
    //     let sql2=`select title from addzsk where id=${zsk_id}`;
    //     let knowname=await this.app.mysql.query(sql2);
    //     res[i].username=username[0].name;
    //     res[i].kname=knowname[0].title;
    // }
    return res;
}
}

module.exports = WdService;
