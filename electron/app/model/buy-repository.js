const withBasicRepository = include("node/config/models/with-basic-repository");
const buyTable = db.buys;
const buyRepository = withBasicRepository({}, buyTable);

module.exports = buyRepository;