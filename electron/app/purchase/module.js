const routes = include("app/purchase/routes");

module.exports = {
  name: "purchases",
  routes,
  tables: ["purchases"]
}
