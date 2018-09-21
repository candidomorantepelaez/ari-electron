const withBasicRepository = include("node/core/persistent-manager/nedb/with-basic-repository");
const loadDb = include("node/core/persistent-manager/nedb/load-db");

module.exports = {
  withBasicRepository,
  loadDb
}
