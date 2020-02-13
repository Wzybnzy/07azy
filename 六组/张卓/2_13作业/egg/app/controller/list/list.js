'use strict';

const Controller = require('egg').Controller;

class AddlistController extends Controller {
    async addlist(){
        let {ctx} = this    
        let { name, phone, card, address, label, followup, role } = ctx.request.body;
        if (!name || !phone || !card || !address || !label || !followup || !role) {
            ctx.body = {
              code: 2,
              mgs: '缺少参数'
            }
            return;
          }
        //   console.log( name, phone, card, address, label, followup, role );
          
          let user = await ctx.service.list.list.getuser(name)
          console.log(user);
          
          //判断用户是否已存在
           if (user.length > 0) {
              ctx.body = {
                code: 3,
                mgs: '该用户已经存在'
              }
              return;
            }
        //添加用户
        // console.log(user);
        
     let res = await ctx.service.list.list.addlist(ctx.request.body)
    //  console.log(res);
    if (res.affectedRows == 1) {
        ctx.body = {
          code: 1,
          mgs: '添加成功'
        }
      } else {
        ctx.body = {
          code: 0,
          mgs: '添加失败'
        }
      }       
    }


    //删除
    async dellist(){
       let {ctx} = this
       let {id} = ctx.query
       let res = await ctx.service.list.list.dellist(id)
       if(res.affectedRows !==0 ){
           ctx.body = {
               code:1,
               mgs:"删除成功"
           }
       }else{
           ctx.body = {
               code:0,
               mgs:"删除失败"
           }
       }
    }


    //所有列表
    async getlist(){
        let {ctx} = this 
        let {page = 1, limit=5} = ctx.query
        let res = await ctx.service.list.list.getlist(page,limit)
        ctx.body = {
            code:1,
            ...res
        }
    }
}

module.exports = AddlistController;