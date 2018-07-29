const configRepository = include("server/model/config-repository");
const withBasicController = include("server/controllers/with-basic-controller");

const configController = withBasicController({}, configRepository);

module.exports = configController;