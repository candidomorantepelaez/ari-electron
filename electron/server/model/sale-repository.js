const db = include("server/model/connect-db");
const withBasicRepository = include("server/model/with-basic-repository");

const saleTable = db.sales;

const saleRepository = withBasicRepository({}, saleTable);

module.exports = saleRepository;