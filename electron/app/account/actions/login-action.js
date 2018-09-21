const accountSchema = include("app/account/account-schema");
const accountFunctions = include("app/account/functions");
const authManager = include("node/core/auth-manager");
const cookieManager = include("node/core/cookie-manager");

const validate = (req, res, next) => {
  if (accountSchema.isValidate(req.body) === true) {
    next();
  }
  res.status(400).send({ message: "invalid data" });
}

const execute = (req, res, next) => {
  const credentials = { nif: req.body.nif, password: req.body.password };
  accountFunctions
    .checkCredentials(credentials)
    .then(seller => {
      authManager
        .generateToken(credentials)
        .then(token => {
          cookieManager.setCookie(res, constants.cookies.name, token);
          res.status(200).send({ message: "login ok" });
        })
        .catch(err => res.status(500).send({ message: err }));
    })
    .catch(err => res.status(401).send({ message: err }));
};

module.exports = {
  validate,
  execute,
};