
const whiteList=['/login','/registry','/'];
const jwt=require('jsonwebtoken');



module.exports=()=>{
    return async (ctx,next)=>{
      if(whiteList.includes(ctx.path)){
         await next();
      }else{
        let token = ctx.request.headers.authorization;
        //   console.log(token,"00000000")
        if(!token){
            ctx.body={
                code:3,
                msg:'没有权限'
            }
            return;
        }

            try{
              let res=await jwt.verify(token,ctx.app.config.keys);
              await next();
            }catch(e){
                console.log(e)
                ctx.body={
                    code:0,
                    data:e
                }
            }
        
      }
    }
}