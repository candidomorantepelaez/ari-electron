const withBasicController = include("server/controllers/with-basic-controller");
const routeRepository = include("server/model/route-repository");

const routeController = withBasicController({}, routeRepository);

module.exports = routeController;
