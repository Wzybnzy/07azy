'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async select(username) {
        return await this.app.mysql.get('yq_userlist', {
            username
        })
    }
    async registry(username, password) {
        await this.app.mysql.insert('yq_userlist', {
            username,
            password
        })
    }
    async login(username, password) {
        return await this.app.mysql.get('yq_userlist', {
            username,
            password
        })
    }
}

module.exports = UserService;

