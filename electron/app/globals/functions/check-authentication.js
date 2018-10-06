const authManager = include("node/core/auth-manager");
const cookieManager = include("node/core/cookie-manager");

const checkAuthentication = (req) => new Promise((resolve, reject) => {
  let token = cookieManager.getCookie(req, config.cookies.name);
  authManager
    .verifyToken(token)
    .then(credentials => resolve(credentials))
    .catch(error => reject(error));
});

module.exports = checkAuthentication;