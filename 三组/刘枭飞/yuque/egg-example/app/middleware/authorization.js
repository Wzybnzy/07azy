let whiltList = ["/login", "/zc"];
const jwt = require("jsonwebtoken");
module.exports = () => {
  return async (ctx, next) => {
    if (whiltList.includes(ctx.path)) {
      await next()
    } else {
      let token = ctx.request.headers.authorization
      if (!token) {
        ctx.body = {
          code: 4,
          msg: "没有权限"
        }
      }
      return;
    }

    try {
      jwt.verify(token, ctx.app.config.keys)
      console.log("通过验证")
      await next()
    } catch (e) {
      console.log(e);
      ctx.body = {
        code: 3,
        msg: "token过期"
      }
    }
  }
}