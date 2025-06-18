const jwt = require('jsonwebtoken');
const secreat = 'ESPESecreat';
const payload = {
    sub: 1,
    rol: "customer",
}

function signToken(payload, secreat){
    return jwt.sign(payload, secreat);
}

const token = signToken(payload, secreat);
console.log(token);