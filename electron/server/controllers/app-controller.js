const appService = include("server/services/app-service");
const withBasicController = include("server/controllers/with-basic-controller");

const appController = withBasicController({}, appService);

module.exports = appController;