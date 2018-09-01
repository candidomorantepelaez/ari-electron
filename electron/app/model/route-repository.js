const withBasicRepository = include("node/config/models/with-basic-repository");
const routeTable = db.routes;
const routeRepository = withBasicRepository({}, routeTable);

module.exports = routeRepository;