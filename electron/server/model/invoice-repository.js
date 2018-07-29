const db = include("server/model/connect-db");
const withBasicRepository = include("server/model/with-basic-repository");

const invoiceTable = db.invoices;

const invoiceRepository = withBasicRepository({}, invoiceTable);

module.exports = invoiceRepository;