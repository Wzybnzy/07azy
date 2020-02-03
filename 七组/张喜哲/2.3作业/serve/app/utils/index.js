const jwt = require('jsonwebtoken');
const TOKEN_KEY = '112233';
module.exports.tokenCreater = function(user) {
    return jwt.sign(user, TOKEN_KEY);
};
module.exports.tokenVerify = function(token) {
    return jwt.verify(token, TOKEN_KEY);
};
