const sellerRepository = include("server/model/seller-repository");
const withBasicService = include("server/services/with-basic-service");

const sellerService = withBasicService({}, sellerRepository);

module.exports = sellerService;