const saleSchema = include("app/sale/sale-schema");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const sale = req.body.sale;
  if (saleSchema.isValid(sale) === true) {
    repositories
      .sales
      .save(sale)
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
