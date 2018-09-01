const withBasicRepository = include("node/config/models/with-basic-repository");
const saleTable = db.sales;
const saleRepository = withBasicRepository({}, saleTable);

module.exports = saleRepository;