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
    async cha({ name, uid }) {
        const $query = `select * from know where name="${name}" and uid='${uid}'`;
        const cha = await this.app.mysql.query($query);
        return cha;
    }
    async add({ name, describe, uid, visual }) {
        const $el = `insert into know(\`name\`,\`describe\`,\`uid\`,\`visual\`) values("${name}","${describe}","${uid}","${visual}")`;
        console.log($el);
        const add = await this.app.mysql.query($el);
        return add;
    }
    async Delete({ id }) {
        const $el = `delete from know where id=?`;
        const $qy = [id];
        const deleteid = await this.app.mysql.query($el, $qy);
        // console.log(deleteid);
        return deleteid;
    }
    async Updatelist({ id, name, describe, uid, visual }) {
        const $el = `update know set \`name\`="${name}",\`describe\`="${describe}" ,\`uid\`="${uid}",\`visual\`='${visual}' where \`id\`='${id}'`;
        console.log($el);
        const deleteid = await this.app.mysql.query($el);
        // console.log(deleteid);
        return deleteid;
    }
}

module.exports = UserService;
