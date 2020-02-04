'use strict';

const Controller = require('egg').Controller;
const { tokenCreater } = require('../utils');
class HomeController extends Controller {
    async login() {
        const { username, pwd } = this.ctx.request.body;
        const newpwd = this.ctx.helper.help(pwd);
        const $query = `select * from loco where username='${username}' and pwd = '${newpwd}';`;
        const biaoshi = await this.app.mysql.query($query);
        if (biaoshi.length > 0) {
            const token = tokenCreater({
                userid: biaoshi[0].id,
                time: new Date().getTime(),
                username: biaoshi[0].username,
                type: biaoshi[0].type,
            });
            this.ctx.session.userToken = token;
            const data = {
                username: biaoshi[0].username,
            };
            this.ctx.body = {
                code: '1',
                data: biaoshi[0],
                // userid: biaoshi[0].userid,
                token,
            };
        } else {
            this.ctx.body = {
                code: '0',
                msg: '验证错误',
            };
        }
    }
    async register() {
        const biaoshi = await this.ctx.service.user.biaoshi(this.ctx.request.body);
        if (biaoshi.length) {
            this.ctx.body = {
                code: 0,
                msg: '您输入的用户名已经存在',
            };
        } else {
            const reguist = await this.ctx.service.user.reguist(this.ctx.request.body);
            if (reguist.affectedRows > 0) {
                this.ctx.body = {
                    code: '1',
                    msg: '存入成功',
                };
            }
        }
    }
    async add() {
        const cha = await this.ctx.service.user.cha(this.ctx.request.body);
        if (cha.length) {
            this.ctx.body = {
                code: 0,
                msg: '您输入的知识库已经存在',
            };
        } else {
            const add = await this.ctx.service.user.add(this.ctx.request.body);
            if (add.affectedRows > 0) {
                this.ctx.body = {
                    code: '1',
                    msg: '存入成功',
                };
            }
        }
    }

    async update() {
        const updatelist = await this.ctx.service.user.Updatelist(this.ctx.request.body);
        if (updatelist.affectedRows > 0) {
            this.ctx.body = {
                code: '1',
                msg: '修改成功',
                data: await this.app.mysql.query(
                    `select \`id\`, \`name\`, \`describe\`, \`uid\`, \`visual\` from know`
                ),
            };
        }
    }
    async delete() {
        console.log(this.ctx.query);
        const deleteid = await this.ctx.service.user.Delete(this.ctx.query);

        if (deleteid.affectedRows > 0) {
            this.ctx.body = {
                code: '1',
                msg: '删除成功',
            };
        }
    }
    async getlist() {
        const $query = `select  \`name\`, \`describe\`, \`uid\`, \`visual\` from know`;

        const list = await this.app.mysql.query($query);
        if (list.length > 0) {
            this.ctx.body = {
                code: '1',
                data: list,
            };
        } else {
            this.ctx.body = {
                code: '0',
                msg: '暂无知识库',
            };
        }
    }
}

module.exports = HomeController;
