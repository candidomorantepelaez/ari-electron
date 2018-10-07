const warehouseSchema = include("app/warehouse/warehouse-schema");
const r = require("ramda");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const warehouse = req.body.warehouse;
  const id = req.params.id;
  if (warehouseSchema.isValid(store) === true
    && r.isNil(warehouse["_id"]) === false
    && id === warehouse["_id"]) {
    repositories
      .warehouses
      .update(warehouse)
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
