const Controller = require('egg').Controller;
const jwt =require('jsonwebtoken')
const createRule = {
    name: {
      type: 'string',
    },
    pwd: {
      type: 'password',
    },
};
class UserController extends Controller{
    async login(){
        const {ctx,service}=this
        const {name,pwd}=ctx.request.body
        if(!name||!pwd){
            ctx.body={
                code:3,
                msg:'缺失参数'
            }
            return
        }
        try {
            ctx.validate(createRule)

            let user =await service.user.getuser(name)
            if(user.length==0){
                ctx.body={
                    code:2,
                    msg:'用户名不存在，请注册'
                }
                return
            }
            let res =await service.user.login(name,ctx.helper.help(pwd))
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
        }catch(e){
            console.log(e)
            ctx.body={
                code:4,
                msg:'参数校验失败'
            }
        }
    }
    async registry(){
        const {ctx,service}=this
        const {name,pwd}=ctx.request.body
        if(!name||!pwd){
            ctx.body={
                code:3,
                msg:'缺失参数'
            }
            return
        }
        try {
            ctx.validate(createRule)
            let user =await service.user.getuser(name)
            if(user.length>0){
                ctx.body={
                    code:2,
                    msg:'用户名已存在，请重新输入'
                }
                return
            }
            let res = await service.user.registry(name, ctx.helper.help(pwd));
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
        }catch(e){
            console.log(e)
            ctx.body={
                code:4,
                msg:'参数校验失败'
            }
        }
    }
    async getuserinfo(){
        const {ctx,service}=this
        const {uid}=ctx.query
        let res =await service.user.getuserinfo(uid)
        ctx.body=res
    }
}
module.exports=UserController
