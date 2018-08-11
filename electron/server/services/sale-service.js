const saleRepository = include("server/model/sale-repository");
const withBasicService = include("server/services/with-basic-service");

const saleService = withBasicService({}, saleRepository);

module.exports = saleService;