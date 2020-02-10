module.exports={
   hmc(pwd){
    const crypto = require('crypto');

    const secret = 'abcdefg';
    const hash = crypto.createHmac('sha256', secret)
                       .update(pwd)
                       .digest('hex');
    return hash
   } 
}