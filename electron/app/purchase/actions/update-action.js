const purchasechema = include("app/purchase/purchase-schema");
const r = require("ramda");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const purchase = {
    _id: req.body.id,
    products: req.body.products,
    date: req.body.date,
    warehouse: req.body.warehouse,
    seller: req.body.seller,
    price: req.body.price,
    tax: req.body.tax,
    totalPrice: req.body.totalPrice
  };
  if (purchaseSchema.isValid(store) === true && r.isNil(purchase["_id"]) === false) {
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
