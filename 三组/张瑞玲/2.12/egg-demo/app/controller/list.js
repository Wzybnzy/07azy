const Controller=require('egg').Controller
class ListController extends Controller {
    async add(){
        const {ctx,service} =this
        const {name,phone,card,address,label,followup,role}=ctx.request.body
        if(!name|| !phone|| !card|| !address|| !label|| !followup|| !role){
            ctx.body={
                msg:'缺失参数',
                code:2
            }
            return
        }
        let user=await service.list.getuser(name)
        if(user){
            ctx.body={
                code:3,
                msg:'该用户已存在请重新输入'
            }
            return
        }
        let res= await service.list.add(ctx.request.body)
        console.log(res)
        if(res.affectedRows==1){
            ctx.body={
                msg:'添加成功',
                code:1
            }
        }else{
            ctx.body={
                msg:'添加失败',
                code:0
            }
        }
    }
    async dellist(){
        let {ctx,service}=this
        let {id}=ctx.query
        let res =await service.list.dellist(id)

        if(res.affectedRows !==0){
            ctx.body={
                code:1,
                msg:'删除成功'
            }
        }else{
            ctx.body={
                code:0,
                msg:'删除失败'
            }
        }
    }
    async getlist(){
        let {ctx,service}=this
        let {page =1,limit=5}=ctx.query
        let res =await service.list.getlist(page,limit)
        ctx.body={
            code:1,
            ...res
        }
    }
}
module.exports=ListController