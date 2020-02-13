const jwt = require("jsonwebtoken");
const whileList = ["/login", "/register"];

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
      }
      try {
        let userInfo = jwt.verify(token, ctx.app.config.keys);
        await next();
      } catch (error) {
        if (error.name == "TokenExpiredError") {
          ctx.body = {
            code: 6,
            msg: "token过期"
          }
          return;
        }
        ctx.body = {
          code: 7,
          msg: "错误"
        }
      }
    }
  }
}