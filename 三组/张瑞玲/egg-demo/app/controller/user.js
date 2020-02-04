const Controller = require('egg').Controller;
const jwt =require('jsonwebtoken')
class UserController extends Controller {
    async login(){
        const {ctx,service} =this
        const {username,password}=ctx.request.body
        if(username && password){
            let hmcpass=ctx.helper.hmc(password)
            let data=await service.user.login(username,hmcpass)
            if(data){
                let token=jwt.sign({username,password},'abcdefg',{expiresIn:60*60*6})
                ctx.body={
                    msg:'登陆成功',
                    code:1,
                    token
                }
            }else{
                ctx.body={
                    msg:'登陆失败',
                    code:0
                }
            }
        }else{
            ctx.body={
                msg:'缺失参数',
                code:3
            }
        }
        
    }
    async registry(){
        const {ctx,service}=this
        const {username,password}=ctx.request.body
        if(username&&password){
            let data =await service.user.select(username,password)
            if(data){
                ctx.body={
                    msg:'用户已存在，请重新输入',
                    code:2
                }
            }else{
                try {
                    let hmcpass=ctx.helper.hmc(password)
                    await service.user.registry(username,hmcpass)
                    ctx.body={
                        msg:'注册成功',
                        code:1
                    }
                } catch (e) {
                    ctx.body={
                        msg:e,
                        code:-1
                    }
                }
            }
        }else{
            ctx.body={
                msg:'缺失参数',
                code:3
            }  
        }
    }
}
module.exports=UserController