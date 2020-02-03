const crypto = require('crypto');

module.exports = {
    help(e) {
        console.log(this.app.keys);
        const hash = crypto
            .createHmac('sha256', e)
            .update(this.app.keys[0])
            .digest('hex');
        return hash;
    },
};
