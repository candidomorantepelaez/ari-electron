const routes = include("app/account/routes");
const defaultData = include("app/account/default-data");
const test = include("app/account/test");

module.exports = {
  routes,
  tables: ["accounts"],
  defaultData,
  test,
}
