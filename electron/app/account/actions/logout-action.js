const cookieManager = include("node/core/cookie-manager");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  cookieManager.clearCookie(res, config.cookies.name);
  res.status(200).send({ message: "logout ok!!!"})
};

module.exports = {
  authenticate,
  execute
};