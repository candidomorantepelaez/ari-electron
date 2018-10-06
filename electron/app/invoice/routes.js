const invoiceActions = include("app/invoice/actions");

const invoiceRoutes = [
  {
    url: "/invoice",
    method: "post",
    action: invoiceActions.save
  }, {
    url: "/invoice/:id",
    method: "put",
    action: invoiceActions.update,
  }, {
    url: "/invoice/:id",
    method: "get",
    action: invoiceActions.findOne,
  }, {
    url: "/invoice/:id",
    method: "delete",
    action: invoiceActions.remove,
  }, {
    url: "/invoices/search",
    method: "post",
    action: invoiceActions.search,
  }, {
    url: "/invoices/list",
    method: "get",
    action: invoiceActions.list,
  }, {
    url: "/invoices/paginate",
    method: "post",
    action: invoiceActions.paginate,
  }, {
    url: "/invoices/count",
    method: "get",
    action: invoiceActions.count,
  },
];

module.exports = invoiceRoutes;