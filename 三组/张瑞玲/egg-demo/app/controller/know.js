const Controller=require('egg').Controller
class KnowController extends Controller {
    async add(){
        const {ctx,service} =this
        const {know_name,know_info,isshow,uid}=ctx.request.body
        if(!know_name || !know_info|| !isshow || !uid){
            ctx.body={
                msg:'缺失参数',
                code:3
            }
            return
        }
        let res= await service.know.add(ctx.request.body)
        console.log(res)
        if(res.affectedRows==1){
            ctx.body={
                msg:'添加成功',
                code:1
            }
        }else{
            ctx.body={
                msg:'添加失败',
                code:2
            }
        }
    }
    async del(){
        const {ctx,service} =this
        const {id,uid}=ctx.request.body
        if(!id || !uid){
            ctx.body={
                msg:'缺失参数',
                code:3
            }
            return
        }
        let res= await service.know.del(id,uid)
        console.log(res)
        if(res.affectedRows==1){
            ctx.body={
                msg:'删除成功',
                code:1
            }
        }else{
            ctx.body={
                msg:'删除失败',
                code:2
            }
        }
    }
    async update(){
        const {ctx,service} =this
        const {id,know_name,know_info,isshow,uid}=ctx.request.body
        if(!know_name || !know_info|| !isshow || !uid ||!id){
            ctx.body={
                msg:'缺失参数',
                code:3
            }
            return
        }
        let res= await service.know.update(id,know_name,know_info,isshow,uid)
        if(res.affectedRows==1){
            ctx.body={
                msg:'修改成功',
                code:1
            }
        }else{
            ctx.body={
                msg:'修改失败',
                code:2
            }
        }
    }
    async list(){
        const {ctx,service}=this 
        let {uid} =ctx.request.body
        if(!uid){
            ctx.body ={
                code:3,
                msg:'缺失参数'
            }
            return
        }
        let res =await service.know.list(uid)
        console.log(res)
        ctx.body={
            code:1,
            data:res
        }
    }
}
module.exports=KnowController