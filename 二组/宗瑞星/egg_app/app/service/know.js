'use strict';

const Service = require('egg').Service;

class KnowService extends Service {
    async addknow(know_name, know_info, isshow, uid) {
        let knowlist = await this.app.mysql.insert('yq_knowlist', {know_name, know_info, isshow, uid});
        return knowlist;

    }
    async updateknow(know_name, know_info, isshow, uid){
        let knowlist = await this.app.mysql.update('yq_knowlist', {know_name, know_info, isshow, uid});
        return knowlist;
    }
    async deleteknow(id,uid){
        let knowlist = await this.app.mysql.delete('yq_knowlist', {id,uid});
        return knowlist;
    }
}

module.exports = KnowService;
