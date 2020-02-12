let jwt=require('jsonwebtoken');
let whiteList=['/login','/registry'];

module.exports=()=>{
    return async (ctx,next)=>{
       if(whiteList.includes(ctx.path)){
           await next();
           return;
       }
       const token=ctx.request.headers.authorization;
       if(!token){
           ctx.body={
               code:3,
               msg:'token不存在'
           }
           return;
       }else{
           
           try{
            jwt.verify(token,ctx.app.config.keys);
            await next();
           }catch(e){
               ctx.body={
                   code:2,
                   msg:'没有权限'
               }
           }
       }
    }
}