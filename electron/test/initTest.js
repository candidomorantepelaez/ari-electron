global.base_dir = __dirname;
global.abs_path = function(path) {
  return base_dir + path;
}
global.include = function(file) {
  return require("./../"+ file);
}

// load constants
global.constants = include("node/config/constants/test");

// create logger
global.logger = include("node/config/logs/log");

// create db
global.db = include("node/config/models/connect-db");

// create node server
include("node/index.js");

const appTests = require("./api/app");
const AccountTests = require("./api/account");

describe("tests Ari-Distri: ", () => {
	describe("app-tests: ", appTests),
	describe("account-tests: ", AccountTests)
});
