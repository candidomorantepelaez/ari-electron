const wharehouseRepository = include("server/model/wharehouse-repository");
const withBasicService = include("server/services/with-basic-service");

const wharehouseService = withBasicService({}, wharehouseRepository);

module.exports = wharehouseService;