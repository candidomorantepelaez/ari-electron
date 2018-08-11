const buyRepository = include("server/model/buy-repository");
const withBasicService = include("server/services/with-basic-service");

const buyService = withBasicService({}, buyRepository);

module.exports = buyService;