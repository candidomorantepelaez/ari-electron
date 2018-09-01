global.base_dir = __dirname;
global.abs_path = function(path) {
  return base_dir + path;
}
global.include = function(file) {
  return require(abs_path('/' + file));
}

// create logger
global.logger = include("node/config/logs/log");

// create db
global.db = include("node/config/models/connect-db");

global.constants = include("node/config/constants/index");

// create electron app
if (constants.development.electron === true) {
  include("electron/index.js");
}

// create node server
include("node/index.js");
