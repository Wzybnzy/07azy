const crypto = require('crypto')
 const encryption=(pwd)=>{
    return crypto.createHash("md5")
                 .update(pwd)
                 .digest("hex")
 }

module.exports={
    encryption
}