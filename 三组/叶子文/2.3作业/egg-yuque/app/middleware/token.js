const jwt = require("jsonwebtoken")
const whileList = ["/login", "/register"]

module.exports = () => {
  return async (ctx, next) => {
    if (whileList.includes(ctx.path)) {
      await next()
    } else {
      let token = ctx.request.headers.authorization;
      if (token) {
        try {
          let userInfo = jwt.verify(token, ctx.app.config.keys)
        } catch (error) {
          ctx.body = {
            code: 6,
            msg: "token过期"
          }
        }
      } else {
        ctx.body = {
          code: 5,
          msg: "没有权限"
        }
      }
    }
  }
}