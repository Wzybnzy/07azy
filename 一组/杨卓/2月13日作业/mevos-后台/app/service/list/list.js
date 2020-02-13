'use strict';

const Service = require('egg').Service;

class ListService extends Service {
  async getuser(name) {//查询该用户是否存在
    let res=await this.app.mysql.get('list',{name})
    return res;
  }
  async add(obj){//添加
    let {name,phone,card,address,label,followup,role}=obj;
    let res=await this.app.mysql.insert('list',{
        name,
        phone,
        card,
        address,
        label,
        followup,
        role,
        time:this.app.mysql.literals.now
    })
    return res;
  }
  async del(id){//删除
    let arr=id.split(',')//字符串转数组
    let res=await this.app.mysql.delete('list',{id:arr})
    return res;
  }
  async getall(page,limit){//查询全部数据
    let start=(page-1)*limit//起始下标，limit一页多少条
    // let res=await this.app.mysql.select('list')
    let sql=`select * from list limit ${start},${limit}`//列表数据
    let res=await this.app.mysql.query(sql)

    let sql1=`select count(*) from list`//总条数
    let count=await this.app.mysql.query(sql1)
    return {
        total:count[0]['count(*)'],
        data:res
    };
  }
}

module.exports = ListService;
