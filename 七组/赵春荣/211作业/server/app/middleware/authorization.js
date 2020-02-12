const whiteList = ['/login', '/registry'];
const jwt = require('jsonwebtoken');

module.exports = () => {
    return async (ctx, next) => {
        if (whiteList.includes(ctx.path)) {
            await next();
        } else {
            const token = ctx.request.headers.authorization;
            if (!token) {
                ctx.body = {
                    code: 4,
                    msg: '没有权限',
                };
                return;
            } else {
                try {
                    const userInfo = jwt.verify(token, ctx.app.config.keys);
                    console.log(userInfo);
                    await next();
                } catch (e) {
                    console.log(e, '错误');
                }
            }
        }
    };
};
