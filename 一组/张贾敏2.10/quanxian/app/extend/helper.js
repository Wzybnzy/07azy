const crypto=require('crypto')//这个不用下包

const help=(pwd)=>{
    return crypto.createHash('md5')
    .update(pwd)
    .digest("hex")
}

module.exports={
    help
}