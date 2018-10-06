const warehouseSchema = include("app/warehouse/warehouse-schema");
const r = require("ramda");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const warehouse = {
    _id: req.body.id,
    name: req.body.name,
    address: req.body.address,
    phones: req.body.phones,
    emails: req.body.emails,
    webs: req.body.webs,
    nif: req.body.nif,
  };
  if (warehouseSchema.isValid(store) === true && r.isNil(warehouse["_id"]) === false) {
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
