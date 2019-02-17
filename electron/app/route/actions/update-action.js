const routeSchema = include("app/route/route-schema");
const r = require("ramda");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const route = req.body.route;
  const id = req.params.id;
  if (routeSchema.isValid(store) === true
    && r.isNil(route["_id"]) === false
    && id === route["_id"]) {
    repositories
      .routes
      .update(route)
      .then(result => res.status(200).send(result))
      .catch(err => res.status(500).send({ message: err }));
  } else {
    res.status(400).send({ message: "invalid data" });
    return;
  };
};

module.exports = {
  authenticate,
  execute
};