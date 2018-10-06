const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  repositories
    .stores
    .count()
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send({ message: err }));
};

module.exports = {
  authenticate,
  execute
};
