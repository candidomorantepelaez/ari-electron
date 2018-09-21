const persistentManager = include("node/core/persistent-repository");
const accountTable = db.accounts;
const accountRepository = persistentManager.withBasicRepository({}, accountTable);

module.exports = {
  table: ["accounts"],
  accountRepository,
}