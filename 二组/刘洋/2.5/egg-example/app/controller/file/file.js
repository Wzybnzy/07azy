'use strict';

const Controller = require('egg').Controller;

class FileController extends Controller {
    async createdoc() {
        let {ctx}=this
        let {kid,uid,fname,fcont,isshow}=ctx.request.body
        if(!kid||!uid||!fname||!fcont||!isshow){
            ctx.body={
                code:2,
                msg:"缺少必要参数"
            }
            return;
        }
        let res=await ctx.service.file.file.createdoc(kid,uid,fname,fcont,isshow)
        if(res.affectedRows==1){
            ctx.body={
                code:1,
                msg:"新建成功"
            }
        }else{
            ctx.body={
                code:0,
                msg:"新建失败"
            }
        }
    
      }
    
      async deldoc(){
        let {ctx}=this
        let {fid}=ctx.request.body
        if(!fid){
            ctx.body={
                code:2,
                msg:"缺少必要参数"
            }
            return;
        }
        let res=await ctx.service.file.file.deldoc(fid)
        if(res.affectedRows==1){
            ctx.body={
                code:1,
                msg:"删除成功"
            }
        }else{
            ctx.body={
                code:0,
                msg:"删除失败"
            }
        }
      }
    
      async updatedoc(){
        let {ctx}=this
        let {fid,fname,fcont,isshow}=ctx.request.body
        if(!fid||!fname||!fcont){
            ctx.body={
                code:2,
                msg:"缺少必要参数"
            }
            return;
        }
        let res=await ctx.service.file.file.updatedoc(fid,fname,fcont,isshow)
        if(res.affectedRows==1){
            ctx.body={
                code:1,
                msg:"修改成功"
            }
        }else{
            ctx.body={
                code:0,
                msg:"修改失败"
            }
        }
      }
    
      async doclist(){
           let {ctx}=this
        let res=await ctx.service.file.file.doclist()
        ctx.body={
            code:1,
            data:res
        }
      }

}

module.exports = FileController;
