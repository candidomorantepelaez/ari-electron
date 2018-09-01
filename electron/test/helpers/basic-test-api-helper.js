global.base_dir = __dirname;
global.abs_path = function(path) {
  return base_dir + path;
}
global.include = function(file) {
  return require("./../../"+ file);
}

const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

const config = include("node/config/constants/index");
const basePath = config.basePath;
const versionApi = config.versionApi;

const request = chai.request(`${basePath}${versionApi}`);

module.exports = {
  chai,
  should,
  expect,
  assert,
  request
}