const Service = require('egg').Service;

class ListService extends Service {
  async getuser(name) {
    let res = await this.app.mysql.get('list',{name});
    return res;
  }
  async add(obj){
    let {name,phone,card,address,label,followup,role} = obj;
    let res = await this.app.mysql.insert('list',{
        name,
        phone,
        card,
        address,
        label,
        followup,
        role,
        time:this.app.mysql.literals.now
    });
    return res;
  }
  async dellist(id){
      let arr = id.split(',');
      let res = await this.app.mysql.delete('list',{id:arr});
      return res;
  }
  async getlist(page,limit){
        let start = (page -1) * limit;
        let sql = `select * from list limit ${start}, ${limit}`;
        let res = await this.app.mysql.query(sql);
        let sql1 = `select count(*) from list`; 
        let count = await this.app.mysql.query(sql1);

      return {
          total:count[0]['count(*)'],
          data:res
      };
  }
}

module.exports = ListService;
