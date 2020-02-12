const Service =require('egg').Service
class ListService extends Service{
    async add(name,phone,card,address,label,followup,role){
        let res = await this.app.mysql.insert('list',{
            name,
            phone,
            card,
            address,
            label,
            followup,
            role
        })
        return res;
    }
  
  
}
module.exports=ListService