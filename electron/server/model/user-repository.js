const db = include("server/model/connect-db");
const withBasicRepository = include("server/model/with-basic-repository");

const userTable = db.users;

const userRepository = withBasicRepository({}, userTable);

module.exports = userRepository;