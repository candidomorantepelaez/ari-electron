const db = include("server/model/connect-db");
const withBasicRepository = include("server/model/with-basic-repository");

const clientTable = db.clients;

const clientRepository = withBasicRepository({}, clientTable);

module.exports = clientRepository;