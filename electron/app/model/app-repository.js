const withBasicRepository = include("node/config/models/with-basic-repository");
const appTable = db.apps;
const appRepository = withBasicRepository({}, appTable);

module.exports = appRepository;