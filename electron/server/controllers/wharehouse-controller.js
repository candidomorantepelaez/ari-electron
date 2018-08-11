const withBasicController = include("server/controllers/with-basic-controller");
const wharehouseService = include("server/services/seller-service");

const wharehouseController = withBasicController({}, wharehouseService);

module.exports = wharehouseController;