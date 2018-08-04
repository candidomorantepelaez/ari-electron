const messages = include("server/validations/messages.json");
const indicative = require("indicative");

const userRules = {
  name: "required|alpha_numeric",
  password: "required|alpha_numeric|min:6|max:20|confirmed",
  password_confirmation: "required|alpha_numeric|min:6|max:20",
  email: "required|email",
};

exports.validateUserForCreate = (req, res, next) => {
  const user = req.body;
  indicative
    .validate(user, userRules, messages)
    .then(result => {
      console.log(result);
      next();
    })
    .catch(errors => {
      console.log(errors);
      res.status(500).send(errors);
    });
};


