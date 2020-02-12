const Controller = require('egg').Controller;
const jwt =require('jsonwebtoken')
class UserController extends Controller{
    async login(){
        const {ctx,service}=this
        const {phone,pwd}=ctx.request.body
        if(!phone||!pwd){
            ctx.body={
                code:3,
                msg:'缺失参数'
            }
            return
        }
            let user =await service.user.getuser(phone)
            if(!user){
                ctx.body={
                    code:2,
                    msg:'用户名不存在，请注册'
                }
                return
            }
            let res =await service.user.login(phone,ctx.helper.help(pwd))
            const token =jwt.sign({...res[0]},this.app.config.keys,{expiresIn:'6h'})
            if(res.length>0){
                ctx.body={
                    code:1,
                    token,
                    uid:res[0].id,
                    msg:'登陆成功'
                }
            }else{
                ctx.body={
                    code:0,
                    msg:'登陆失败'
                }
            }
    }
    async registry(){
        const {ctx,service}=this
        const {phone,pwd}=ctx.request.body
        if(!phone||!pwd){
            ctx.body={
                code:3,
                msg:'缺失参数'
            }
            return
        }
       
            let user =await service.user.getuser(phone)
            if(user){
                ctx.body={
                    code:2,
                    msg:'用户名已存在，请重新输入'
                }
                return
            }
            let res = await service.user.registry(phone, ctx.helper.help(pwd));
            if(res.affectedRows==1){
                ctx.body={
                    code:1,
                    msg:'注册成功'
                }
            }else{
                ctx.body={
                    code:0,
                    msg:'注册失败'
                }
            }
    }
}
module.exports=UserController
