const Controller =require('egg').Controller
class FollowController extends Controller{
    async follow(){
        let {ctx,service}=this
        let {user_id,follow_id}=ctx.request.body
        if(!user_id|| !follow_id){
            ctx.body={
                code:3,
                msg:'缺失参数'
            }
            return
        }
        let follow =await service.follow.getfollow(user_id,follow_id)
        if(follow.length !==0){
            ctx.body={
                code:2,
                msg:'该作者已经关注过了'
            }
            return
        }
        let res=await service.follow.follow(user_id,follow_id)
        if(res.affectedRows==1){
            ctx.body={
                code:1,
                msg:'关注成功'
            }
        }else{
            ctx.body={
                code:0,
                msg:'关注失败'
            } 
        }
    }
    async followlist(){
        let {ctx,service}=this
        let {uid}=ctx.query
        if(!uid){
            ctx.body={
                code:3,
                msg:'缺失参数'
            }
            return
        }
        let res=await service.follow.followlist(uid)
        if(res.affectedRows == 1){
            ctx.body = {
                code:1,
                data:res
            }
        } else {
            ctx.body = {
                code:0,
                msg:"获取失败"
            }
        }
    }
    async followdel(){
        let {ctx,service}=this
        let {user_id,follow_id}=ctx.query
        if(!user_id ||!follow_id){
            ctx.body={
                code:3,
                msg:'缺少参数'
            }
            return
        }
        let res =await service.follow.followdel(user_id,follow_id)
        if(res.affectedRows == 1){
            ctx.body = {
                code:1,
                data:res
            }
        } else {
            ctx.body = {
                code:0,
                msg:"获取失败"
            }
        }
    }
}
module.exports=FollowController