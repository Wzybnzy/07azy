'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  //注册
  async register() {
    const { ctx, service } = this;
    let { username, password } = ctx.request.body;
    // console.log(username,password) 
    if (username && /\.{6,12}/.test(password)) {
      let hmcPwd = ctx.helper.hmc(password)
      let data = await service.user.selectUser(username)
      if (data.length) {
        ctx.body = {
          code: 3,
          msg: "用户已存在!"
        }
      } else {
        try {
          let data = await service.user.register(username, hmcPwd)
          ctx.body = {
            code: 1,
            msg: "注册成功！",
            data
          }
        } catch (err) {
          ctx.body = {
            code: 0,
            msg: "注册失败！",
            err
          }
        }
      }
    } else {
      ctx.body = {
        code: 2,
        msg: "参数错误！"
      }
    }
  }
  //登录
  async login() {
    const { ctx, service } = this;
    let { username, password } = ctx.request.body;
    // console.log(username,password) 
    if (username && /\.{6,12}/.test(password)) {
      let hmcPwd = ctx.helper.hmc(password)
      let data = await service.user.login(username,hmcPwd)
      if (data.length) {
        ctx.body = {
          code: 1,
          msg: "登录成功!"
        }
      } else {
        ctx.body = {
          code: 0,
          msg: "登录失败!"
        }
      }
    } else {
      ctx.body = {
        code: 2,
        msg: "参数错误！"
      }
    }
  }
  //修改简介
  async updataJianjie() {
    const { ctx, service } = this;
    let { username, password,jianjie,id } = ctx.request.body;
    // console.log(username,password,jianjie,id) 
    if (username && / \.{6,12}/.test(password) && id) {
      try{
        let hmcPwd = ctx.helper.hmc(password)
        let data = await service.user.uddataJianjie(username,hmcPwd,jianjie,id);
        ctx.body = {
          code: 1,
          msg:"修改成功！",
          data
        }
      }catch(err){
        ctx.body = {
          code: 0,
          msg: "修改失败！",
          err
        }
      }
    } else {
      ctx.body = {
        code: 2,
        msg: "参数错误！"
      }
    }
  }
}

module.exports = HomeController;
