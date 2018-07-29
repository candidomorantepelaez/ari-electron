const userRepository = include("server/model/user-repository");
const withBasicController = include("server/controllers/with-basic-controller");

const userController = withBasicController({}, userRepository);

module.exports = userController;