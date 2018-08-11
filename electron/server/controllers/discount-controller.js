const withBasicController = include("server/controllers/with-basic-controller");
const discountService = include("server/services/discount-service");

const discountController = withBasicController({}, discountService);

module.exports = discountController;