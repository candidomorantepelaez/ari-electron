const withBasicRepository = include("node/config/models/with-basic-repository");
const clientTable = db.clients;
const clientRepository = withBasicRepository({}, clientTable);

module.exports = clientRepository;