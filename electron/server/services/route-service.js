const routeRepository = include("server/model/route-repository");
const withBasicService = include("server/services/with-basic-service");

const routeService = withBasicService({}, routeRepository);

module.exports = routeService;