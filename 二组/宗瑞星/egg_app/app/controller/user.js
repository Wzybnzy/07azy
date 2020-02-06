'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken')

class UserController extends Controller {
    async Register() {
        const { ctx, service } = this;
        const { username, password } = ctx.request.body
 
        if (username && password) {
            const regtionList = await service.user.select(username)
            if (regtionList) {
                ctx.body = {
                    code: 0,
                    message: '用户名已被占用，请重新设置'
                }
            } else {
                let registerUser = await service.user.registry(username, ctx.helper.help(password))
                if (registerUser) {
                    ctx.body = {
                        code: 500,
                        message: '注册失败',
                    }
                } else {
                    ctx.body = {
                        code: 200,
                        message: '注册成功',
                        data: registerUser
                    } 
                }
            }
        } else {     
            ctx.body = {
                code: 404,
                message: '请填写完整信息'
            }
        }
    }

    async Login() {
        const { ctx, service } = this
        const { username, password } = ctx.request.body
        
        if (username && password) {
            const success = await service.user.login(username, ctx.helper.help(password))
            if (success) {
                ctx.body = {
                    code: 200,
                    message: '登陆成功',
                    token: jwt.sign({ ...success }, this.app.config.keys, { expiresIn: '1h' })
                    // data: success
                }
            } else {
                ctx.body = {
                    code: 500,
                    message: '登录失败'
                }
            }
        } else {
            ctx.body = {
                code: 404,
                message: '没有参数'
            }
        }
    }

}

module.exports = UserController;