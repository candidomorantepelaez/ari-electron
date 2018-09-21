const persistentManager = require("./../../../node/core/persistent-manager");
const test = require("./../../helpers/basic-test-helper");

module.exports = () => {
  it("export persistentManager: ", function() {
    test.expect(persistentManager).to.be.a("object");
  });

  it("persistentManager.loadDb exist: ", function() {
    test.expect(persistentManager).to.have.property("loadDb");
    test.expect(persistentManager).to.be.a("object");
  });

  it("persistentManager.withBasicRepository exist: ", function() {
    test.expect(persistentManager).to.have.property("withBasicRepository");
    test.expect(persistentManager).to.be.a("object");
  });

  it("persistentManager.withBasicRepository rocks: ", function() {
    const repository = persistentManager.withBasicRepository({}, "test");
    test.expect(repository).to.be.a("object");
    test.expect(repository).to.have.property("save");
  });

};