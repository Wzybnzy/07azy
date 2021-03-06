const Controller=require('egg').Controller
class FileController extends Controller {
    async add(){
        const {ctx,service} =this
        const {file_name, file_info,know_id, isshow, uid}=ctx.request.body
        if(!file_name|| !file_info|| !know_id|| !isshow|| !uid){
            ctx.body={
                msg:'缺失参数',
                code:3
            }
            return
        }
        let res= await service.file.add(ctx.request.body)
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
        let res= await service.file.del(id,uid)
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
        const {id,file_name, file_info,uid}=ctx.request.body
        if(!id|| !file_name|| !file_info|| !uid){
            ctx.body={
                msg:'缺失参数',
                code:3
            }
            return
        }
        let res= await service.file.update(id,file_name, file_info,uid)
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
    async search(){
        let {ctx,service} =this
        let {search=''}=service.file.search(search)
        if (res.length !==0){
            ctx.body={
                code:1,
                data:res
            }
        }else{
            ctx.body={
                code:0,
                msg:'搜索失败'
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
        let res =await service.file.list(uid)
        ctx.body={
            code:1,
            data:res
        }
    }
    async detail() {
        let { ctx,service } = this;
        let { uid, know_id } = ctx.query;
        if (!uid || !know_id) {
            ctx.body = {
                code: 3,
                mes: '缺少参数'
            }
            return;
        }
        let res = await service.file.detail(uid, know_id);
        if (res.length !== 0) {
            ctx.body = {
                code: 1,
                data: res
            }
        } else {
            ctx.body = {
                code: 0,
                mes: '获取详情失败'
            }
        }
    }
}
module.exports=FileController