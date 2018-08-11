const db = include("server/model/connect-db");
const withBasicRepository = include("server/model/with-basic-repository");

const wharehouseTable = db.wharehouses;

const wharehouseRepository = withBasicRepository({}, wharehouseTable);

module.exports = wharehouseRepository;