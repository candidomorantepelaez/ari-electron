const Datastore = require("nedb");
const ramda = require("ramda");
const rutaDb = "/.ariDb";

const tables = [
  "clients",
  "sellers",
  "wharehouses",
  "products",
  "discounts",
  "sales",
  "buys",
  "invoices",
  "routes",
  "apps",
];

const withLoadTable = (wrapper, nameTable) => {
  wrapper[nameTable] = new Datastore ({
    filename: `${rutaDb}/${nameTable}.json`,
    timestampData: true
  });
  wrapper[nameTable].loadDatabase((err) => {
    if (err) {console.log(`error al cargar la tabla ${nameTable}`)};
    console.log(`tabla ${nameTable} cargada`);
  });
  return wrapper;
}

const db = ramda.reduce(withLoadTable, {}, tables);

module.exports = db;
