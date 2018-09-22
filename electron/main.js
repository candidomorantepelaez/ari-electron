global.base_dir = __dirname;
global.abs_path = function(path) {
  return base_dir + path;
}
global.include = function(file) {
  return require(abs_path('/' + file));
}

global.config = include("node/config/index").development;

// create logger
global.logger = include("node/core/log-manager");

const persistentManager = include("node/core/persistent-manager");
const appManager = include("node/core/app-manager");

// create db
const db = persistentManager.loadDb(appManager);

// insert default data
persistentManager.loadDefaultData(db, appManager);

// create repository
global.repositories = persistentManager.createRepositories(db, appManager);

// create electron app
if (config.app.electron === true) {
  include("electron/index.js");
}

// create node server
include("node/index.js");
