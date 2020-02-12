const Controller=require('egg').Controller
class ListController extends Controller {
    async add(){
        const {ctx,service} =this
        const {name,phone,card,address,label,followup,role}=ctx.request.body
        if(!name|| !phone|| !card|| !address|| !label|| !followup|| !role){
            ctx.body={
                msg:'缺失参数',
                code:3
            }
            return
        }
        let res= await service.list.add(name,phone,card,address,label,followup,role)
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
}
module.exports=ListController