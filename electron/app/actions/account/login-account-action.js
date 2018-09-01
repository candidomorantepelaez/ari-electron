const withLifecycleAction = include("node/config/actions/lifecycle-action");
const loginAccountAction = withLifecycleAction({});
const credentialSchema = include("app/data-types/credentials-schema");
const account = include("node/config/account/index");
const auth = include("node/config/auth/jwt-auth");
const cookiesHttp = include("node/config/cookies/cookies-http");
const cookiesElectron = include("node/config/cookies/cookies-electron");

loginAccountAction.validate = req => credentialSchema.isValidate(req.body);

loginAccountAction.execute = (req, res) => {
  return new Promise((resolve, reject) => {
    const credentials = { nif: req.body.nif, password: req.body.password };
    account
      .checkCredentials(credentials)
      .then(seller => {
        auth
          .generateToken(credentials)
          .then(token => {
            cookiesHttp.setCookie(res, constants.cookies.name, token);
            if (constants.development.electron === true) {
              cookiesElectron.setCookie(res, constants.cookies.name, token);
            }
            resolve({ message: "login ok" });
          })
          .catch(err => reject(err));
      })
      .catch(err => reject("wrong credentials"));
  });
};

module.exports = loginAccountAction;