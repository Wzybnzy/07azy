const Service =require('egg').Service
class UserService extends Service{
    async login(username,password){
        return await this.app.mysql.get('user',{
            username,
            password
        })
    }
    async select(username,password){
        return await this.app.mysql.get('user',{
            username,
            password
        })
    }
    async registry(username,password){
        await this.app.mysql.insert('user',{
            username,
            password
        })
    }
}
module.exports=UserService