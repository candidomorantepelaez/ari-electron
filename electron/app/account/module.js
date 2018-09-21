const routes = include("app/account/routes");
const model = inclue("app/account/model");
const defaultData = include("app/account/default-data");

module.exports = {
  routes,
  table: model.table,
  defaultData
}
