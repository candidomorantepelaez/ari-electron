const Datastore = require("nedb");
const ramda = require("ramda");
const insertDefaultData = include("node/config/models/default-data-db");
const tables = include("app/tables/index");

const withLoadTable = (wrapper, nameTable) => {
  wrapper[nameTable] = new Datastore ({
    filename: `${constants.pathBbdd}/${nameTable}.json`,
    timestampData: true
  });
  wrapper[nameTable].loadDatabase((err) => {
    if (err) {logger.log("error", `error load table ${nameTable}`)};
    logger.log("info", `table ${nameTable} load`);
    insertDefaultData(wrapper, nameTable);
  });
  return wrapper;
}

const db = ramda.reduce(withLoadTable, {}, tables);

module.exports = db;