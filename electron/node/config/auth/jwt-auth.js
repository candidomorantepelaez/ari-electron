const jwt = require("jsonwebtoken");

const generateToken = (credentials) => {
  return new Promise((resolve, reject) => {
    jwt.sign(credentials, constants.auth.secretkey, (err, token) =>{
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });
}

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, constants.auth.secretkey, (err, credentials) => {
      if (err) {
        reject(err);
      }
      resolve(credentials);
    });
  });
};

module.exports = {
  generateToken,
  verifyToken
}
