const withBasicController = include("server/controllers/with-basic-controller");
const routeService = include("server/services/route-service");

const routeController = withBasicController({}, routeService);

module.exports = routeController;
