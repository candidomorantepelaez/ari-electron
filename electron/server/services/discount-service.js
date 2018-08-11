const discountRepository = include("server/model/discount-repository");
const withBasicService = include("server/services/with-basic-service");

const discountService = withBasicService({}, discountRepository);

module.exports = discountService;