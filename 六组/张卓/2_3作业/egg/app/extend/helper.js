// const crypto = require("crypto")

// const help = (pwd) =>{
//     return crypto.createHash("md5")
//     .updata(pwd)
//     .digest('hex')
// }
// module.exports = {
//     help
// }
const crypto = require('crypto');

const help = (pwd) => {
    return crypto.createHash('md5').

        update(pwd).
        digest('hex');
}

module.exports = {
    help
}