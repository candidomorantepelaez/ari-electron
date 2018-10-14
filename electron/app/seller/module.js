const routes = include("app/seller/routes");
const defaultData = include("app/seller/default-data");

module.exports = {
  name: "sellers",
  routes,
  tables: ["sellers"],
  defaultData,
}
