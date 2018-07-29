const db = include("server/model/connect-db");
const withBasicRepository = include("server/model/with-basic-repository");

const routeTable = db.routes;

const routeRepository = withBasicRepository({}, routeTable);

module.exports = routeRepository;