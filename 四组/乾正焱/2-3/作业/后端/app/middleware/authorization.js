const whiteList = ['/login',"/registry"];//创建白名单， 不需要鉴权的路径
const jwt = require('jsonwebtoken');
module.exports = ()=>{
    return async (ctx,next)=>{
        if(whiteList.includes(ctx.path)){
            await next()
        }else{
            // 判断token是否存在
            let token = ctx.request.headers.authorization;
            if(!token){
                ctx.body={
                    code:4,
                    msg:"没有权限"
                }
                return;
            }else{
                try{
                    let userinfo = jwt.verify(token,ctx.app.config.keys);
                    // console.log(userinfo,"&&&&&&&&&&&&&&&&&&&&&&&&&&")
                    await next()
                }
                catch(e){
                    console.log(e,"********************")
                    ctx.body={
                        code:5,
                        msg:"token校验失败！"
                    }
                }
            }
        }
    }
}