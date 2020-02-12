const crypto = require('crypto');
module.exports = {
    cryp(pwd){
        return crypto.createHash('md5')
                     .update(pwd)
                     .digest("hex")
    }
  };