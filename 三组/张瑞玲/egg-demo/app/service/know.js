const Service =require('egg').Service
class KnowService extends Service{
    async add(know_name,know_info,isshow,uid){
        return await this.app.mysql.insert('know',{
            know_name,
            know_info,
            isshow,
            uid
        })
    }
    async del(id,uid){
        return await this.app.mysql.delete('know',{
          id,
          uid
        })
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
        return await this.app.mysql.select('know',{
            uid
        })
    }
}
module.exports=KnowService