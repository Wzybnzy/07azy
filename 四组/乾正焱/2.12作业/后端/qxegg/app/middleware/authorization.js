const jwt = require('jsonwebtoken');
const whiteList = ['/login',"/registry"];
module.exports = ()=>{
    return async (ctx,next)=>{
        if(whiteList.includes(ctx.path)){
            await next();
        }else{
            let token = ctx.request.header.authorization;
            if(!token){
                ctx.body={
                    code:4,
                    msg:"没有权限"
                }
                return;
            }else{
                try{
                    let userinfo = jwt.verify(token,ctx.app.config.keys);
                    await next();
                }
                catch(e){
                    ctx.body={
                        code:5,
                        msg:"token校验失败"
                    }
                }
            }
        }
        
        
    }
}