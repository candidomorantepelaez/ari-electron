const db = include("server/model/connect-db");
const withBasicRepository = include("server/model/with-basic-repository");

const discountTable = db.discounts;

const discountRepository = withBasicRepository({}, discountTable);

module.exports = discountRepository;