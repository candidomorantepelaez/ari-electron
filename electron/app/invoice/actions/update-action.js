const invoiceSchema = include("app/invoice/invoice-schema");
const r = require("ramda");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const invoice = req.body.invoice;
  const id = req.params.id;
  if (invoiceSchema.isValid(store) === true
    && r.isNil(invoice["_id"]) === false
    && id === invoice["_id"]) {
    repositories
      .invoices
      .update(invoice)
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
