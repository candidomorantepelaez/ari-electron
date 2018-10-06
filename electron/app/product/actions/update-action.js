const productSchema = include("app/product/product-schema");
const r = require("ramda");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const product = {
    _id: req.body.id,
    name: req.body.name,
    code: req.body.code,
    description: req.body.description,
    salePrice: req.body.salePrice,
    buyPrice: req.body.buyPrice,
    warehouse: req.body.warehouse,
    stock: req.body.stock,
  };
  if (productSchema.isValid(store) === true && r.isNil(product["_id"]) === false) {
    repositories
      .products
      .update(product)
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
