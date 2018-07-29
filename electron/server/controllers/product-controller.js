const productRepository = include("server/model/product-repository");
const withBasicController = include("server/controllers/with-basic-controller");

const productController = withBasicController({}, productRepository);

module.exports = productController;
