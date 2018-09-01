const withBasicRepository = include("node/config/models/with-basic-repository");
const productTable = db.products;
const productRepository = withBasicRepository({}, productTable);

module.exports = productRepository;