const whileList = ["/login", "/register"];
const jwt = require("jsonwebtoken")

module.exports = () => {
  return async (ctx, next) => {
    if (whileList.includes(ctx.path)) {
      await next();
    } else {
      let token = ctx.request.headers.authorization;
      if (!token) {
        ctx.body = {
          code: 5,
          msg: "没有权限"
        }
        return;
      } else {
        try {
          let userinfo = jwt.verify(token, ctx.app.config.keys);
          await next();
        } catch (error) {
          ctx.body = {
            code: 6,
            msg: "token过期"
          }
        }
      }
    }
  }
}