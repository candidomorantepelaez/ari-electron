const {session} = require("electron");
const jwt = require("jsonwebtoken");

const cookieName = "access_token";
const secretkey = "secretkey";
const cookieUrl = "http://localhost";
const cookiePath = "/";

exports.verifyToken = (req, res, next) => {
  session.defaultSession.cookies.get({
    url: cookieUrl,
    name: cookieName
  }, (error, cookies) => {
    if (error){
      res.status(500).send("500");
    }
    if (cookies.length === 0){
      res.status(401).send("401");
    }
    jwt.verify(cookies[0].value, secretkey, function(err, decoded) {
      if (err) {
        res.status(401).send("401");
      }
      if (decoded.name !== "manolo"
        && decoded.pass !== "123") {
        res.status(401).send("401");
      }
      next();
    });
  });
};

exports.createToken = (req, res) => {
  console.log("hola que tal");
  const credentials = req.body;
  const token = jwt.sign(credentials, secretkey);
  session.defaultSession.cookies.set({
    url: cookieUrl,
    name: cookieName,
    value: token,
    path: cookiePath,
  },err => {
    if (err) {
      console.log(err);
    }
  });
  res.send("token: "+token);
};

exports.deleteToken = (req, res, next) => {
  session.defaultSession.cookies.remove(url, cookieName, () => next())
};