global.base_dir = __dirname;
global.abs_path = function(path) {
  return base_dir + path;
}
global.include = function(file) {
  return require("./../../"+ file);
}

const chai = require("chai");
const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;