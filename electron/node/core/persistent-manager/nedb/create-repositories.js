const withBasicRepository = include("node/core/persistent-manager/nedb/with-basic-repository");
const r = require("ramda");

const createRepository = (table, appManager, db) => {
  const repository = r.objOf(table)(withBasicRepository({}, db[table]));
  if (r.isNil(appManager.customRepositories)
    || r.isNil(appManager.customRepositories[table])) {
    return repository;
  }
  return r.merge(repository, appManager.customRepositories[table]);
}

const createRepositories = (db, appManager) => r.reduce((acc, table) => r.merge(acc, createRepository(table, appManager, db)), {}, appManager.tables);

module.exports = createRepositories;


