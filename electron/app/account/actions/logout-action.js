const authManager = include("node/core/auth-manager");
const cookieManager = include("node/core/cookie-manager");

const authenticate = (req, res, next) => {
  let token = cookieManager.getCookie(req, config.cookies.name);
  authManager
    .verifyToken(token)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
};

const execute = (req, res, next) => {
  cookieManager.clearCookie(res, config.cookies.name);
  res.status(200).send({ message: "logout ok!!!"})
};

module.exports = {
  authenticate,
  execute
};