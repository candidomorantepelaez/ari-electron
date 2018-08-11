const productService = include("server/services/product-service");
const withBasicController = include("server/controllers/with-basic-controller");

const productController = withBasicController({}, productService);

module.exports = productController;
