const withBasicRepository = include("node/config/models/with-basic-repository");
const invoiceTable = db.invoices;
const invoiceRepository = withBasicRepository({}, invoiceTable);

module.exports = invoiceRepository;