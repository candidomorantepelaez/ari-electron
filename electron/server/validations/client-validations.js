const messages = include("server/validations/messages.json");
const indicative = require("indicative");

const clientRules = {
  name: "required|alpha_numeric|max:200",
  firstName: "required|alpha_numeric|max:200",
  lastName: "required|alpha_numeric|max:200",
  street: "required|alpha_numeric|max:200",
  city: "required|alpha_numeric|max:200",
  state: "required|alpha_numeric|max:200",
  country: "required|alpha_numeric|max:200",
  nif: "required|alpha_numeric|max:20",
  phone: "required|numeric|max:20",
  email: "required|email|max:200",
};

const clientSanitize = {
  nombre: "escape",
  street: "escape",
  city: "escape",
  state: "escape",
  country: "escape",
  nif: "escape",
  phone: "escape",
  email: "escape",
};

exports.validateClientForCreate = (req, res, next) => {
  const client = req.body;
  console.log(client);
  const sanitizedClient = indicative.sanitize(client, clientSanitize);
  console.log(sanitizedClient);
  indicative
    .validate(sanitizedClient, clientRules, messages)
    .then(result => {
      console.log(result);
      next();
    })
    .catch(errors => {
      console.log(errors);
      res.status(500).send(errors);
    });
};
