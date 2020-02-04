const Service = require('egg').Service;

class UserService extends Service {
    async biaoshi({ username }) {
        const $query = `select * from loco where username="${username}"`;
        const biaoshi = await this.app.mysql.query($query);
        return biaoshi;
    }
    async reguist({ username, pwd }) {
        const $el = `insert into loco(username,pwd ) values(?,?)`;
        const $qy = [username, this.ctx.helper.help(pwd)];
        const reguist = await this.app.mysql.query($el, $qy);
        return reguist;
    }
}

module.exports = UserService;
