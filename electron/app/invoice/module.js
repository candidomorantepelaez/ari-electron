const routes = include("app/invoice/routes");

module.exports = {
  name: "invoices",
  routes,
  tables: ["invoices"]
}
