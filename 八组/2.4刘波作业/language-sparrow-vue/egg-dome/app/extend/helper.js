module.exports = {
  hmc(passwrod) {
    const crypto = require('crypto');
    const secret = 'liubo';
    return crypto.createHmac('sha256', secret)
      .update(passwrod)
      .digest('hex');
  }
}