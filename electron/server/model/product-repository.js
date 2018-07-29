const db = include("server/model/connect-db");
const withBasicRepository = include("server/model/with-basic-repository");

const productTable = db.products;

const productRepository = withBasicRepository({}, productTable);

module.exports = productRepository;