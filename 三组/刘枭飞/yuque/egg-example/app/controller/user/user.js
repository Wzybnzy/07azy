'use strict';

const Controller = require('egg').Controller;
const jwt = require("jsonwebtoken")
let validi = {
  name: "string",
  pwd: {
    type: "password",
    required: true
  }
}

class UserController extends Controller {
  async zc() {
    const { ctx } = this;
    let { name, pwd } = ctx.request.body
    if (!name || !pwd) {
      ctx.body = {
        code: 3,
        msg: "缺少参数"
      }
      return;
    }
    try {
      ctx.validate(validi);
      let data = await ctx.service.user.user.iszc(name);
      if (data.length > 0) {
        ctx.body = {
          code: 3,
          msg: "此用户已存在"
        }
      } else {
        let res = await ctx.service.user.user.zc(name, ctx.helper.help(pwd))
        if (res.affectedRows == 1) {
          ctx.body = {
            code: 1,
            msg: "注册成功"
          }
        } else {
          ctx.body = {
            code: 2,
            msg: "注册失败"
          }
        }
      }
    } catch (e) {
      ctx.body = {
        code: 4,
        msg: "参数类型不正确"
      }
    }
  }

  async login() {
    let { ctx } = this;
    let { name, pwd } = ctx.request.body;
    if (!name || !pwd) {
      ctx.body = {
        code: 4,
        msg: "缺少参数"
      }
      return;
    }
    try {
      let data = await ctx.service.user.user.iszc(name);
      if (data.length == 0) {
        ctx.body = {
          code: 3,
          msg: "此用户不存在"
        }
      } else {
        let res = await ctx.service.user.user.login(name, ctx.helper.help(pwd))
        let token = jwt.sign({ ...res[0] }, ctx.app.config.keys, { expiresIn: "10h" }
        )
        console.log(token)
        if (res.length > 0) {
          ctx.body = {
            code: 1,
            token,
            uid: res[0].id,
            msg: "登陆成功"
          }
        } else {
          ctx.body = {
            code: 2,
            msg: "登陆失败,密码不正确"
          }
        }
      }
    } catch (e) {
      ctx.body = {
        code: 4,
        msg: "参数类型不正确"
      }
    }
  }
  async add() {
    let { ctx } = this;
    let { title, jije, uid, isshow } = ctx.request.body;
    if (!title || !jije || !uid) {
      ctx.body = {
        code: 4,
        msg: "缺少参数"
      }
      return;
    }
    let res = await ctx.service.user.user.add(title, jije, uid, isshow);
    if (res.affectedRows == 1) {
      ctx.body = {
        code: 1,
        msg: "添加成功"
      }
    } else {
      ctx.body = {
        code: 2,
        msg: "添加失败"
      }
    }
  }

  async select() {
    let { ctx } = this
    let { uid } = ctx.query
    let res = await ctx.service.user.user.select(uid)
    console.log(res)
    if (res.length > 0) {
      this.ctx.body = {
        code: 1,
        msg: res
      }
    } else {
      this.ctx.body = {
        code: 2,
        msg: "暂无数据"
      }
    }
  }
  async del() {
    let { ctx } = this;
    let { id } = ctx.request.body;
    let res = await ctx.service.user.user.del(id)
    if (res.affectedRows == 1) {
      ctx.body = {
        code: 1,
        msg: "删除成功"
      }
    } else {
      ctx.body = {
        code: 2,
        msg: "删除失败"
      }
    }
  }

  async updata() {
    let { ctx } = this
    let { title, jije, isshow, id } = ctx.request.body;
    let res = await ctx.service.user.user.updata(title, jije, isshow, id);
    console.log(res)
    if (res.affectedRows == 1) {
      ctx.body = {
        code: 1,
        msg: "修改成功"
      }
    } else {
      ctx.body = {
        code: 2,
        msg: "修改失败"
      }
    }
  }
}

module.exports = UserController;
