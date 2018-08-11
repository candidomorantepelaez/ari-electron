const withBasicController = include("server/controllers/with-basic-controller");
const sellerService = include("server/services/seller-service");

const sellerController = withBasicController({}, sellerService);

module.exports = sellerController;