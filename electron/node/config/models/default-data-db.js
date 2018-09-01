const ramda = require("ramda");
const defaultData = include("app/default-data/index");

const checkVoidTable = (db, nameTable) => new Promise((resolve, reject) => {
  db[nameTable].count({}, (err, count) => {
    if (err) {
      logger.log("error", `check data ${nameTable} default`, err);
      reject();
    }
    if (count === 0) {
      resolve(true);
    }
    resolve(false);
  });
});

const chargeDefaultData = (db, nameTable, obj) => {
  logger.log("info", `check default data in table ${nameTable}!`);
  checkVoidTable(db, nameTable)
    .then(result => {
      if (result === true) {
        db[nameTable].insert(obj, (err, newDoc) => {
          if (err) {
            logger.log("error", `created default ${nameTable} data`, err)
          }
          logger.log("info", `created default ${nameTable} data`);
        })
      }
    });
};

const insertDefaultData = (db, nameTable) => {
  if (ramda.has(nameTable, defaultData) === true) {
    chargeDefaultData(db, nameTable, defaultData[nameTable]);
  }
}

module.exports = insertDefaultData;

