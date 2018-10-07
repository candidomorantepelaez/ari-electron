const saleSchema = include("app/sale/sale-schema");
const r = require("ramda");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const sale = req.body.sale;
  const id = req.params.id;
  if (saleSchema.isValid(store) === true
    && r.isNil(sale["_id"]) === false
    && id === sale["_id"]) {
    repositories
      .sales
      .update(sale)
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
