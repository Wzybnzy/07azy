const Service =require('egg').Service
class FileService extends Service{
    async add(file_name, file_info,know_id, isshow, uid){
        return await this.app.mysql.insert('file',{
            file_name,
             file_info,
             know_id, 
             isshow,
              uid
        })
    }
    async del(id,uid){
        return await this.app.mysql.delete('file',{
          id,
          uid
        })
    }
    async update(id,file_name, file_info,uid){
        return await this.app.mysql.update('file',{
            file_name, 
            file_info,
             uid,
             id
        })
    }
    async list(uid){
        return await this.app.mysql.select('file',{
            uid
        })
    }
}
module.exports=FileService