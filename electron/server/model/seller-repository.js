const db = include("server/model/connect-db");
const withBasicRepository = include("server/model/with-basic-repository");

const sellerTable = db.sellers;

const sellerRepository = withBasicRepository({}, sellerTable);

module.exports = sellerRepository;