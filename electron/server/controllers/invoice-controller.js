const invoiceUtils = include("server/reports/invoice");
const withBasicController = include("server/controllers/with-basic-controller");
const invoiceRepository = include("server/model/invoice-repository");

const invoiceController = withBasicController({}, invoiceRepository);

invoiceController.test = (req, res) => {
  invoiceUtils.crearFactura(req.body);
}

module.exports = invoiceController;
