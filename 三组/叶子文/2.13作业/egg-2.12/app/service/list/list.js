'use strict';

const Service = require('egg').Service;

class ListService extends Service {

  // 查找
  async find(obj) {
    let res = await this.app.mysql.get('list', obj);
    return res;
  }

  // 添加 
  async add(obj) {
    let { name, tel, label, cart, address, followup, role } = obj;
    let res = await this.app.mysql.insert('list', {
      name,
      tel,
      label,
      cart,
      address,
      followup,
      role,
      time: this.app.mysql.literals.now
    });
    return res;
  }

  // 删除
  async del(id) {
    let arr = id.split(",");
    // console.log(arr);
    let res = await this.app.mysql.delete('list', { id: arr });
    return res;
  }

  // 列表
  async getList(page = 1, num = 5) {
    page = (page - 1) * num;
    // console.log(page, num);
    let sql = `select * from list limit ${page},${num}`;
    let res = await this.app.mysql.query(sql);
    let sql2 = `select count(*) from list`;
    let res2 = await this.app.mysql.query(sql2);
    return {
      data:res,
      total:res2[0]["count(*)"]
    };
  }

}

module.exports = ListService;
