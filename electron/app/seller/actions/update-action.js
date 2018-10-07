const sellerSchema = include("app/seller/seller-schema");
const r = require("ramda");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const seller = req.body.seller;
  const id = req.params.id;
  if (sellerSchema.isValid(store) === true
    && r.isNil(seller["_id"]) === false
    && id === seller["_id"]) {
    repositories
      .sellers
      .update(seller)
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
