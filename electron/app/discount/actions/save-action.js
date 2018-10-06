const discountSchema = include("app/discount/discount-schema");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const discount = {
    products: req.body.products,
    price: req.body.price,
    tax: req.body.tax,
    description: req.body.description,
    discount: req.body.discount,
    name: req.body.name,
    initialDate: req.body.initialDate,
    finishDate: req.body.finishDate
  };
  if (discountSchema.isValid(discount) === true) {
    repositories
      .discounts
      .save(discount)
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
