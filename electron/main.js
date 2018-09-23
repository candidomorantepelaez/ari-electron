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

const modules = include("app/modules");
const persistentManager = include("node/core/persistent-manager");
const appManager = include("node/core/app-manager");
const tables = appManager.getTables(modules);
const defaultData = appManager.getDefaultData(modules);
const repositories = appManager.getRepositories(modules);
// create db
const db = persistentManager.loadDb(tables);

// insert default data
persistentManager.loadDefaultData(db, defaultData, tables);

// create repository
global.repositories = persistentManager.createRepositories(db, repositories, tables);

// create electron app
if (config.app.electron === true) {
  include("electron/index.js");
}

// create node server
include("node/index.js");
