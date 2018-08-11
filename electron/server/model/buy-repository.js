const db = include("server/model/connect-db");
const withBasicRepository = include("server/model/with-basic-repository");

const buyTable = db.buys;

const buyRepository = withBasicRepository({}, buyTable);

module.exports = buyRepository;