const withBasicRepository = include("node/config/models/with-basic-repository");
const discountTable = db.discounts;
const discountRepository = withBasicRepository({}, discountTable);

module.exports = discountRepository;