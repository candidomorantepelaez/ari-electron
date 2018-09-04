const withMiddlewareAction = include("node/config/actions/middleware-action");
const logoutAccountAction = withMiddlewareAction({});
const account = include("node/config/account/index");
const auth = include("node/config/auth/jwt-auth");
const cookiesManager = include("node/config/cookies/index");

logoutAccountAction.authenticate = (req, res, next) => {
  let token = cookiesElectron.getCookie(req, constants.cookies.name);
  auth
    .verifyToken(token)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
};

logoutAccountAction.execute = (req, res, next) => {

}

module.exports = logoutAccountAction;