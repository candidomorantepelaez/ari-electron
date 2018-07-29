const withBasicController = include("server/controllers/with-basic-controller");
const discountRepository = include("server/model/discount-repository");

const discountController = withBasicController({}, discountRepository);

module.exports = discountController;