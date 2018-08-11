const invoiceUtils = include("server/reports/invoice");
const withBasicController = include("server/controllers/with-basic-controller");
const invoiceService = include("server/services/invoice-service");

const invoiceController = withBasicController({}, invoiceService);

invoiceController.test = (req, res) => {
  invoiceUtils.crearFactura(req.body);
}

module.exports = invoiceController;
