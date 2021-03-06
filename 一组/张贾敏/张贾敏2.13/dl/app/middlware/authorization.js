const jwt =require("jsonwebtoken")

const whitelist=["/login","registry"]

module.exports=()=>{
    return async (ctx,next)=>{
        if(whitelist.includes(ctx.path)){
            await next()
        }else{
            let token = ctx.request.headers.authorization;
            if(!token){
                ctx.body = {
                    code:4,
                    mes:'没有权限'
                }
                return;
            }
            try{
                let userInfo = jwt.verify(token,ctx.app.config.keys);
                await next();
            } catch(e){
               
                if(e.name == 'TokenExpiredError'){
                    ctx.body = {
                        code:5,
                        mes:'token过期'
                    }
                    return;
                }
            }
        }
    }
}