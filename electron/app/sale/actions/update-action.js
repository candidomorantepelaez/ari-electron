const saleSchema = include("app/sale/sale-schema");
const r = require("ramda");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const sale = {
    _id: req.body.id,
    products: req.body.products,
    discounts: req.body.discounts,
    date: req.body.date,
    client: req.body.client,
    seller: req.body.seller,
    price: req.body.price,
    tax: req.body.tax,
    totalPrice: req.body.totalPrice,
  };
  if (saleSchema.isValid(store) === true && r.isNil(sale["_id"]) === false) {
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
