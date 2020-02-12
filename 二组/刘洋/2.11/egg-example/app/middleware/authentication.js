const jwt=require("jsonwebtoken")
const whitelist=["/login","/register"]
module.exports=()=>{
    return async (ctx,next)=>{
        if(whitelist.includes(ctx.path)){
            await next()
        }else{
            let token=ctx.request.headers.authorization
            if(!token){
                ctx.body={
                    code:5,
                    msg:"请登陆后再试"
                }
                return ;
            }
            try {
                jwt.verify(token,ctx.app.config.keys)
                await next()

            } catch (error) {
                ctx.body={
                    code:6,
                    msg:"token过期"
                }
            }

        }
    }
}