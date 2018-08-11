const productRepository = include("server/model/product-repository");
const withBasicService = include("server/services/with-basic-service");

const productService = withBasicService({}, productRepository);

module.exports = productService;