const withBasicController = include("server/controllers/with-basic-controller");
const saleService = include("server/services/sale-service");

const saleController = withBasicController({}, saleService);

module.exports = saleController;