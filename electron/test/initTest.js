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

// create db
global.db = include("node/core/persistent-manager").loadDb;

// create node server
// include("node/index.js");

const appTests = require("./api/app");
const accountTests = require("./api/account");
const configTests = require("./node/config");
const coreTests = require("./node/core");

describe("tests Ari-Distri: ", () => {
	// describe("app-tests: ", appTests),
  // describe("account-tests: ", accountTests),
  describe("configs-test:", configTests),
  describe("core-test:", coreTests)
});
