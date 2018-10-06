const clientSchema = include("app/client/client-schema");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const client = {
    name: req.body.name,
    address: req.body.address,
    phones: req.body.phones,
    emails: req.body.emails,
    webs: req.body.webs,
    nif: req.body.nif,
  };
  if (clientSchema.isValid(client) === true) {
    repositories
      .clients
      .save(client)
      .then(result => res.status(200).send(result))
      .catch(err => res.status(500).send({ message: err }));
  } else {
    res.status(400).send({ message: "invalid data" });
  };
};

module.exports = {
  authenticate,
  execute
};
