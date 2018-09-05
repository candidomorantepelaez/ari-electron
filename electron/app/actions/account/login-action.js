const credentialSchema = include("app/data-types/credentials-schema");
const account = include("node/config/account/index");
const auth = include("node/config/auth/jwt-auth");
const cookiesManager = include("node/config/cookies/index");

const validate = (req, res, next) => {
  if (credentialSchema.isValidate(req.body) === true) {
    next();
  }
  res.status(400).send({ message: "invalid data" });
}

const execute = (req, res, next) => {
  const credentials = { nif: req.body.nif, password: req.body.password };
  account
    .checkCredentials(credentials)
    .then(seller => {
      auth
        .generateToken(credentials)
        .then(token => {
          cookiesManager.setCookie(res, constants.cookies.name, token);
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