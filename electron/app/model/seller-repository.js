const withBasicRepository = include("node/config/models/with-basic-repository");
const sellerTable = db.sellers;
const sellerRepository = withBasicRepository({}, sellerTable);

module.exports = sellerRepository;