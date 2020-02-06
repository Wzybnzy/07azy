'use strict';

const Controller = require('egg').Controller;
const createVid = {
  name: {
    type: 'string',
  },
  pwd: {
    type: 'password',
    required: true
  },
}

class user extends Controller {
  async login() {
    const { ctx } = this;
    let { name, pwd } = ctx.request.body
    // console.log(ctx.request.body)
    if (!name || !pwd) {
      ctx.body = {
        code: 3,
        mes: "缺少参数"
      }
      return
    }

    // ctx.validate(createVid);
    let data = await ctx.service.service.getuser(name)
    console.log(data, "111111111111111")

    if (data.length == 0) {
      ctx.body = {
        code: 2,
        mes: "没有该用户，请先去注册"
      }
    } else {
      let res = await ctx.service.service.login(name, pwd)
      console.log(res, "222222222222")
      if (res.length > 0) {
        ctx.body = {
          code: 1,
          mes: "登陆成功"
        }
      } else {
        ctx.body = {
          code: 0,
          mes: "登录失败"
        }
      }
    }

  }


  async register() {
    let { ctx } = this
    let { name, pwd } = ctx.request.body
    if (!name || !pwd) {
      ctx.body = {
        code: 3,
        mes: "缺少参数"
      }
      return;
    }

    try {
      //   ctx.validate(createVid)
      let data = await ctx.service.service.getuser(name)

      if (data.length == 0) {
        let res = await ctx.service.service.register(name, pwd)
        // console.log(res,"1111111111111")
        if (res.affectedRows == 1) {
          ctx.body = {
            code: 1,
            mes: "注册成功"
          }
        } else {
          ctx.body = {
            code: 0,
            mes: "注册失败"
          }
        }
      } else {
        ctx.body = {
          code: 2,
          mes: "请重新注册，该用户已经注册过了"
        }
      }
    }
    catch (e) {
      ctx.body = {
        code: 4,
        mes: "参数类型不正确"
      }
    }
  }

  async add() {
    let { ctx } = this
    let { name, info, isshow, uid } = ctx.request.body
    if (!name || !info || !isshow || !uid) {
      ctx.body = {
        code: 3,
        mes: "缺少参数"
      }
      return
    }

    let data = await ctx.service.service.list(uid)

    if (data.length == 0) {
      let res = await ctx.service.service.add(ctx.request.body)
      // console.log(res)
      if (res.affectedRows == 1) {
        ctx.body = {
          code: 1,
          mes: "知识库新建成功"
        }
      } else {
        ctx.body = {
          code: 0,
          mes: "知识库新建失败"
        }
      }

    } else {
      ctx.body = {
        code: 2,
        mes: "知识库已有,请重新添加"
      }
    }
  }

  async del() {
    let { ctx } = this
    let { uid, id } = ctx.request.query
    // console.log(ctx.request.boxy)

    if (!uid || !id) {
      ctx.body = {
        code: 3,
        mes: "缺少参数"
      }
      return
    }

    let res = await ctx.service.service.del(ctx.request.query)

    if (res.affectedRows == 1) {
      ctx.body = {
        code: 1,
        mes: "删除成功"
      }
    } else {
      ctx.body = {
        code: 0,
        mes: "删除失败"
      }
    }
  }

  async updata() {
    let { ctx } = this
    let { name, info, isshow, uid, id } = ctx.request.body

    if (!name || !info || !isshow || !uid || !id) {
      ctx.body = {
        code: 3,
        mes: "缺少参数"
      }
      return
    }

    let res = await ctx.service.service.updata(ctx.request.body)
    if (res.affectedRows == 1) {
      ctx.body = {
        code: 1,
        mes: "编辑成功"
      }
    } else {
      ctx.body = {
        code: 0,
        mes: "编辑失败"
      }
    }
  }

  async list() {
    let { ctx } = this
    let { uid } = ctx.request.query

    if (!uid) {
      ctx.body = {
        code: 3,
        mes: "缺少参数"
      }
      return
    }

    let res = await ctx.service.service.list(uid)
    console.log(res)
      ctx.body = {
        code: 1,
        data: res
      }
  }
}

module.exports = user;
