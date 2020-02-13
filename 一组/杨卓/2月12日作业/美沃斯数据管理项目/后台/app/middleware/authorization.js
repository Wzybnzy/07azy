//中间件，白名单，鉴权校验
const jwt=require('jsonwebtoken');
const whiteList=['/login','/register']//白名单
module.exports=()=>{
    return async (ctx,next)=>{
        if(whiteList.includes(ctx.path)){//在白名单里
            await next();
        }else{
            //获取token
            let token=ctx.request.headers.authorization
            if(!token){//没有token
                ctx.body={
                    code:4,
                    msg:"没有token，没有登录权限"
                }
            }else{
                try{//成功
                    let info=jwt.verify(token,ctx.app.config.keys)
                    await next();
                }catch(e){
                    console.log(e,"EEEEEEEE");
                    if(e.name=='TokenExpiredError'){
                        ctx.body={
                            code:5,
                            msg:"token过期，请重新登录"
                        }
                    }
                }
            }
        }
    }
}