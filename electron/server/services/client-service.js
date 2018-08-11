const clientRepository = include("server/model/client-repository");
const withBasicService = include("server/services/with-basic-service");

const clientService = withBasicService({}, clientRepository);

module.exports = clientService;