const productSchema = include("app/product/product-schema");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const product = {
    name: req.body.name,
    code: req.body.code,
    description: req.body.description,
    salePrice: req.body.salePrice,
    buyPrice: req.body.buyPrice,
    warehouse: req.body.warehouse,
    stock: req.body.stock,
  };
  if (productSchema.isValid(product) === true) {
    repositories
      .products
      .save(product)
      .then(result => res.status(200).send(result))
      .catch(err => res.status(500).send({ message: err }));
  } else {
    res.status(400).send({ message: "invalid data" });
  };
};

module.exports = {
  authenticate,
  execute
};
