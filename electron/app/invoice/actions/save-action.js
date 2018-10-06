const invoiceSchema = include("app/invoice/invoice-schema");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const invoice = {
    sale: req.body.sale,
    date: req.body.date,
    number: req.body.number,
  };
  if (invoiceSchema.isValid(invoice) === true) {
    repositories
      .invoices
      .save(invoice)
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
