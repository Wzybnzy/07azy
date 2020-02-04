const jwt = require("jsonwebtoken")
const whiteList = ['/login']
module.exports = ()=>{
    return async(ctx,next)=>{
        //判断当前的url是否在白名单里面
        if(whiteList.includes(ctx.path)){//不需要登录就访问
            await next()
        }else{
            //获取token
            let token = ctx.request.headers.authorization
            if(!token){
                ctx.body = {
                    code:4, 
                    mes:"没有权限"
                }
                return
            }
            try{
                //晓燕token ,晓燕通过 ，下一步next 
                let userInfo = jwt.verify(token,ctx.app.config.keys)
                console.log("21-userInfo",userInfo);
                await next()
            } catch (e) {
                console.log(e,"sa**********sa");
            }
            console.log("@@@@@@@@@@@@");
            
        }
    }
}