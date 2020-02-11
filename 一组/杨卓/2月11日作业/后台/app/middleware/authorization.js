const jwt=require('jsonwebtoken')
const whiteList=['/login','/register']//白名单
module.exports=()=>{
    return async (ctx,next)=>{
        if(whiteList.includes(ctx.path)){//白名单里包含，不需要校验
            await next()
        }else{
            //获取token
            let token=ctx.request.headers.authorization
            if(!token){//token不存在
                ctx.body={
                    code:4,
                    msg:"token不存在"
                }
                return;
            }
            try{
                //校验成功
                let userinfo=jwt.verify(token,ctx.app.config.keys)
                await next()
            }catch(e){
                console.log(e,"EEEEEEE");
                if(e.name='TokenExpriedError'){
                    ctx.body={
                        code:5,
                        msg:"token过期了"
                    }
                }
            }
        }
    }
}