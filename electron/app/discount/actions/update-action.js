const discountSchema = include("app/discount/discount-schema");
const r = require("ramda");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const discount = req.body.discount;
  const id = req.params.id;
  if (discountSchema.isValid(store) === true
    && r.isNil(discount["_id"]) === false
    && id === discount["_id"]) {
    repositories
      .discounts
      .update(discount)
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
