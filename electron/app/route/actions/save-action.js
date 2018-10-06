const routeSchema = include("app/route/route-schema");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const route = {
    name: req.body.name,
    timerange: req.body.timerange,
    clients: req.body.clients,
    sellers: req.body.sellers,
    streets: req.body.streets,
  };
  if (routeSchema.isValid(route) === true) {
    repositories
      .routes
      .save(route)
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
