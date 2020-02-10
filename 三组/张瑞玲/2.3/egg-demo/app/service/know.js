const Service =require('egg').Service
class KnowService extends Service{
    async add(obj){
        let { know_name, know_info, isshow, uid } = obj;
        let sql = `insert into know (know_name,know_info,isshow,uid) values ('${know_name}','${know_info}','${isshow}',${uid})`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    async del(id,uid){
        let sql = `delete from know where id=${id} and uid=${uid}`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
    async update(id,know_name,know_info,isshow,uid){
        return await this.app.mysql.update('know',{
            know_name,
            know_info,
            isshow,
            uid,
            id
        })
    }
    async list(uid){
        let sql = `select * from know where uid=${uid}`;
        let res = await this.app.mysql.query(sql);
        return res;
    }
}
module.exports=KnowService