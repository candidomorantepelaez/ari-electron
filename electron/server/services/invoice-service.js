const invoiceRepository = include("server/model/invoice-repository");
const withBasicService = include("server/services/with-basic-service");

const invoiceService = withBasicService({}, invoiceRepository);

module.exports = invoiceService;