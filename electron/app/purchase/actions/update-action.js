const purchasechema = include("app/purchase/purchase-schema");
const r = require("ramda");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const purchase = req.body.purchase;
  const id = req.params.id;
  if (purchaseSchema.isValid(store) === true
    && r.isNil(purchase["_id"]) === false
    && id === purchase["_id"]) {
    repositories
      .purchases
      .update(purchase)
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
