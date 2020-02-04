const whiteList = ['/login','/registry','/know/addknow'];
const jwt = require('jsonwebtoken');

module.exports = ()=>{
    return async (ctx,next)=>{
        if(whiteList.includes(ctx.path)){
            await next();
        } else {
            let token = ctx.request.headers.authorization;
            if(!token){
                ctx.body = {
                    code:4,
                    msg:'没有权限'
                }
                return;
            }

            try{
                let userInfo = jwt.verify(token,ctx.app.config.keys);
                // console.log(userInfo);
                await next();
            }
            catch(e){
                console.log(e,'&&&&&&&&&&&&&&&&&&&&&&&');
                ctx.body = {
                    code:5,
                    msg:'token校验失败'
                }
            }
        }

    }
}