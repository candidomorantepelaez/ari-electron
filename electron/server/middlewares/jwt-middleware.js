const jwt = require("jsonwebtoken");

const cookieName = "access_token";
const secretkey = "secretkey";
const options = {
  maxAge: new Date(Date.now() + 60 * 60 * 1000),
  httpOnly: false,
};

exports.verifyToken = (req, res, next) => {
  if (!req.cookies[cookieName]) {
    return res.status(401).send("401");
  }
  const token = req.cookies[cookieName];
  jwt.verify(token, secretkey, (error, userData) => {
    if (error) {
      return res.status(422).send("422");
    }
    req.user = userData;
    next();
  });
};

exports.createToken = (req, res, next) => {
  const credentials = req.body;

  jwt.sign(credentials, secretkey, { expiresIn: "1h" }, (error, token) => {
    if (error) {
      return res.status(500).send("500");
    }
    res.cookie(cookieName, token, options);
    next();
  })
};

exports.deleteToken = (req, res, next) => {
  res.clearCookie(cookieName, options);
  next();
};