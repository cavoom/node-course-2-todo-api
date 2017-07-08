const {SHA256} = require('crypto-js');
// var message = "I am user 254";
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash:  ${hash}`);

const jwt = require('jsonwebtoken');

var data = {

    id: 10
};

var token = jwt.sign(data, '1213abc');
console.log(token);

var decoded = jwt.verify(token, '1213abc');
console.log(decoded);