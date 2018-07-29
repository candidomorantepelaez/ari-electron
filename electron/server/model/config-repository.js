const db = include("server/model/connect-db");
const withBasicRepository = include("server/model/with-basic-repository");

const configTable = db.configs;

const configRepository = withBasicRepository({}, configTable);

module.exports = configRepository;