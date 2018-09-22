global.base_dir = __dirname;
global.abs_path = function(path) {
  return base_dir + path;
}
global.include = function(file) {
  return require("./../"+ file);
}

// load config
global.config = include("node/config/index").test;

// create logger
global.logger = include("node/core/log-manager");

const persistentManager = include("node/core/persistent-manager");
const appManager = include("node/core/app-manager");

// create db
global.db = persistentManager.loadDb(appManager);

// insert default data
persistentManager.loadDefaultData(db, appManager);

// create repository
global.repositories = persistentManager.createRepositories(db, appManager);

// create node server
// include("node/index.js");

const configTests = require("./node/config");
const coreTests = require("./node/core");

describe("tests Ari-Distri: ", () => {
	describe("configs-test:", configTests),
  describe("core-test:", coreTests)
});
