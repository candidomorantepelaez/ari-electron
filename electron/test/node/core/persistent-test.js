const persistentManager = require("./../../../node/core/persistent-manager");
const test = require("./../../helpers/basic-test-helper");

module.exports = () => {
  it("export persistentManager: ", function() {
    test.expect(persistentManager).to.be.a("object");
  });

  it("persistentManager.loadDb exist: ", function() {
    test.expect(persistentManager).to.have.property("loadDb");
    test.expect(persistentManager.loadDb).to.be.a("function");
  });

  it("persistentManager.loadDb rocks: ", function() {
    const appManager = {
      tables: ["test"],
    };
    const db = persistentManager.loadDb(appManager);
    test.expect(db).to.have.property("test");
  });

  it("persistentManager.withBasicRepository exist: ", function() {
    test.expect(persistentManager).to.have.property("withBasicRepository");
    test.expect(persistentManager.withBasicRepository).to.be.a("function");
  });

  it("persistentManager.withBasicRepository rocks: ", function() {
    const repository = persistentManager.withBasicRepository({}, "test");
    test.expect(repository).to.be.a("object");
    test.expect(repository).to.have.property("save");
  });

  it("persistentManager.loadDefaultData exist: ", function() {
    test.expect(persistentManager).to.have.property("loadDefaultData");
    test.expect(persistentManager.loadDefaultData).to.be.a("function");
  });

  it("persistentManager.loadDefaultData rocks: ", function(done) {
    const appManager = {
      tables: ["test"],
      defaultData: {
        test: {
          name: "test"
        }
      }
    };
    const db = persistentManager.loadDb(appManager);
    persistentManager.loadDefaultData(db, appManager);
    const repository = persistentManager.withBasicRepository({}, db.test);
    repository.count().then(result => {
      test.expect(result).to.be.a("object");
      test.expect(result).to.have.property("numberFiles");
      test.expect(result.numberFiles).to.be.equal(1);
      done();
    });
  });

  it("persistentManager.createRepositories exist: ", function() {
    test.expect(persistentManager).to.have.property("createRepositories");
    test.expect(persistentManager.createRepositories).to.be.a("function");
  });

  it("persistentManager.createRepositories basic rocks: ", function(done) {
    const appManager = {
      tables: ["test"],
      defaultData: {
        test: {
          name: "test"
        }
      },
    };
    const db = persistentManager.loadDb(appManager);
    persistentManager.loadDefaultData(db, appManager);
    const repository = persistentManager.createRepositories(db, appManager);
    repository.test.count().then(result => {
      test.expect(result).to.be.a("object");
      test.expect(result).to.have.property("numberFiles");
      test.expect(result.numberFiles).to.be.equal(1);
      done();
    });
  });
};