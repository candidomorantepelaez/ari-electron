const saleActions = include("app/sale/actions");

const saleRoutes = [
  {
    url: "/sale",
    method: "post",
    action: saleActions.save
  }, {
    url: "/sale/:id",
    method: "put",
    action: saleActions.update,
  }, {
    url: "/sale/:id",
    method: "get",
    action: saleActions.findOne,
  }, {
    url: "/sale/:id",
    method: "delete",
    action: saleActions.remove,
  }, {
    url: "/sales/search",
    method: "post",
    action: saleActions.search,
  }, {
    url: "/sales/list",
    method: "get",
    action: saleActions.list,
  }, {
    url: "/sales/paginate",
    method: "post",
    action: saleActions.paginate,
  }, {
    url: "/sales/count",
    method: "get",
    action: saleActions.count,
  },
];

module.exports = saleRoutes;