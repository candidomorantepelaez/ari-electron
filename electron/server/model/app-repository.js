const db = include("server/model/connect-db");
const withBasicRepository = include("server/model/with-basic-repository");

const appTable = db.apps;

const appRepository = withBasicRepository({}, appTable);

module.exports = appRepository;