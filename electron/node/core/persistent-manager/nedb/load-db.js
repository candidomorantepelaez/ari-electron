const Datastore = require("nedb");
const ramda = require("ramda");
const insertDefaultData = include("node/core/persistent-manager/nedb/load-default-data");
const tables = include("node/core/app-manager").tables;

const withLoadTable = (wrapper, nameTable) => {
  wrapper[nameTable] = new Datastore ({
    filename: `${config.persistent.pathBbdd}/${nameTable}.json`,
    timestampData: true
  });
  wrapper[nameTable].loadDatabase((err) => {
    if (err) {logger.log("error", `error load table ${nameTable}`)};
    logger.log("info", `table ${nameTable} load`);
    insertDefaultData(wrapper, nameTable);
  });
  return wrapper;
};

const db = ramda.reduce(withLoadTable, {}, tables);

module.exports = db;