const jwt = require('jsonwebtoken');
const secreat = 'ESPESecreat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbCI6ImN1c3RvbWVyIiwiaWF0IjoxNzUwMjU0ODQyfQ.gpHtXUmMlt8aqfQvy5EJSlJBJSkXK8o5GmEDKaqEfcQ';

function verifyToken(token, secreat){
    return jwt.verify(token, secreat);
}

const payload = verifyToken(token, secreat);
console.log(payload);
