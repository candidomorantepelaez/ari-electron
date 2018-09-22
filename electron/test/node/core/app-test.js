const appManager = require("./../../../node/core/app-manager");
const test = require("./../../helpers/basic-test-helper");

module.exports = () => {

  it("export appManager: ", function() {
    test.expect(appManager).to.be.a("object");
  });

  it("appManager.tables exists: ", function() {
    test.expect(appManager).to.have.property("tables");
  });

  it("appManager.tables is correct: ", function() {
    test.expect(appManager.tables).to.be.a("array");
    test.expect(appManager.tables[0]).to.be.a("string");
    test.expect(appManager.tables[0]).to.equal("accounts");
  });

  it("appManager.defaultData exists: ", function() {
    test.expect(appManager).to.have.property("defaultData");
  });

  it("appManager.defaultData is correct: ", function() {
    test.expect(appManager.defaultData).to.be.a("object");
    test.expect(appManager.defaultData).to.have.property("accounts");
    test.expect(appManager.defaultData.accounts).to.be.a("array");
    test.expect(appManager.defaultData.accounts[0]).to.be.a("object");
    test.expect(appManager.defaultData.accounts[0]).to.have.property("nif");
    test.expect(appManager.defaultData.accounts[0].nif).to.be.equal("12345678Z");
  });

  it("appManager.customRoutes exists: ", function() {
    test.expect(appManager).to.have.property("customRoutes");
  });

  it("appManager.customRoutes is correct: ", function() {
    test.expect(appManager.customRoutes).to.be.a("array");
    test.expect(appManager.customRoutes[0]).to.be.a("object");
    test.expect(appManager.customRoutes[0]).to.have.property("url");
    test.expect(appManager.customRoutes[0].url).to.equal("/credentials");
    test.expect(appManager.customRoutes[0]).to.have.property("action");
    test.expect(appManager.customRoutes[0].action).to.be.a("object");
    test.expect(appManager.customRoutes[0].action).to.have.property("execute");
    test.expect(appManager.customRoutes[0].action.execute).to.be.a("function");
  });
};