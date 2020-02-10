const crypto=require('crypto')//密码加密
const help=(pwd)=>{
    return crypto.createHash('md5')
    .update(pwd)
    .digest('hex')
}
module.exports={
    help
}