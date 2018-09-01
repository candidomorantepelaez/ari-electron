const withBasicRepository = include("node/config/models/with-basic-repository");
const wharehouseTable = db.wharehouses;
const wharehouseRepository = withBasicRepository({}, wharehouseTable);

module.exports = wharehouseRepository;