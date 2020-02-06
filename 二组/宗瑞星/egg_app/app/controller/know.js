'use strict';

const Controller = require('egg').Controller;

class KnowController extends Controller {
    async knowlist() {
        let { ctx } = this;
        let { uid } = ctx.request.body;
        // if (uid) {
            let knowData = await this.app.mysql.select('yq_knowlist',{uid});
            if(knowData){
                ctx.body = {
                    code:200,
                    msg: '获取列表成功',
                    data:knowData
                }
            }else{
                ctx.body = {
                    code:500,
                    msg: '获取列表失败'
                }
            }
        // }else{
        //     ctx.body = {
        //         code: 404,
        //         msg: '缺少参数'
        //     }
        // }
    }

    async addknowlist() {
        let { ctx,service } = this;
        let { know_name, know_info, isshow, uid } = ctx.request.body;

        if ( know_name, know_info, isshow, uid ) {
            let knowData = await service.know.addknow(know_name, know_info, isshow, uid);
            if (knowData) {
                ctx.body = {
                    code: 200,
                    msg: '知识库创建成功'
                }
            } else {
                ctx.body = {
                    code: 500,
                    msg: '知识库创建失败'
                }
            }
        }else{
            ctx.body = {
                code: 404,
                msg: '缺少参数'
            }
        }
    }
    async updateknowlist() {
        let { ctx,service } = this;
        let { know_name, know_info, isshow, uid} = ctx.request.body;
        if ( know_name, know_info, isshow, uid) {
            let knowData = await service.know.updateknow( know_name, know_info, isshow, uid);
            if (knowData) {
                ctx.body = {
                    code: 200,
                    msg: '修改成功'
                }
            } else {
                ctx.body = {
                    code: 500,
                    msg: '修改失败'
                }
            }
        }else{
            ctx.body = {
                code: 404,
                msg: '缺少参数'
            }
        }
    }
    async deleteknowlist() {
        let { ctx,service } = this;
        let { id, uid } = ctx.request.body;
        if (id, uid) {
            let knowData = await service.know.deleteknow(id, uid);
            if (knowData) {
                ctx.body = {
                    code: 200,
                    msg: '删除成功'
                }
            } else {
                ctx.body = {
                    code: 500,
                    msg: '删除失败'
                }
            }
        }else{
            ctx.body = {
                code: 404,
                msg: '缺少参数'
            }
        }   
    }
}

module.exports = KnowController;
