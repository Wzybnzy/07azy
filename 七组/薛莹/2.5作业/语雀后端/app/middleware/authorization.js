const jwt=require("jsonwebtoken");

// 白名单
const whiteList=['/login','/registry'];

module.exports=()=>{
    return async (ctx,next)=>{
        // 判断当前的url是否在白名单里
        if(whiteList.includes(ctx.path)){
            await next();
        }else{
            // 获取token
            let token=ctx.request.headers.authorization;
            if(!token){
                ctx.body={
                    code:5,
                    mes:"没有权限"
                }
                return;
            }

            try {
                // 校验token 
                let userInfo=jwt.verify(token,ctx.app.config.keys);
                console.log(userInfo);

                await next()
            } catch (e) {
                console.log(e,"*************")
                ctx.body={
                    mes:"校验失败"
                }
            }
        }
    }
}