const withBasicController = include("server/controllers/with-basic-controller");
const saleRepository = include("server/model/sale-repository");

const saleController = withBasicController({}, saleRepository);

module.exports = saleController;