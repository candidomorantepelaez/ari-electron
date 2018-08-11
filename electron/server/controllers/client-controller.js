const clientService = include("server/services/client-service");
const withBasicController = include("server/controllers/with-basic-controller");

const clientController = withBasicController({}, clientService);

module.exports = clientController;
