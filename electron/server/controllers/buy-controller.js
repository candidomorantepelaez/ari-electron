const buyService = include("server/services/buy-service");
const withBasicController = include("server/controllers/with-basic-controller");

const buyController = withBasicController({}, buyService);

module.exports = buyController;