const account = include("node/config/account/index");
const auth = include("node/config/auth/jwt-auth");
const cookiesManager = include("node/config/cookies/index");

const authenticate = (req, res, next) => {
  let token = cookiesManager.getCookie(req, constants.cookies.name);
  auth
    .verifyToken(token)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
};

const execute = (req, res, next) => {
  cookiesManager.clearCookie(res, constants.cookies.name);
  res.status(200).send({ message: "logout ok!!!"})
};

module.exports = {
  authenticate,
  execute,
};