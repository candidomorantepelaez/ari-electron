const purchaseActions = include("app/purchase/actions");

const purchaseRoutes = [
  {
    url: "/purchase",
    method: "post",
    action: purchaseActions.save
  }, {
    url: "/purchase/:id",
    method: "put",
    action: purchaseActions.update,
  }, {
    url: "/purchase/:id",
    method: "get",
    action: purchaseActions.findOne,
  }, {
    url: "/purchase/:id",
    method: "delete",
    action: purchaseActions.remove,
  }, {
    url: "/purchases/search",
    method: "post",
    action: purchaseActions.search,
  }, {
    url: "/purchases/list",
    method: "get",
    action: purchaseActions.list,
  }, {
    url: "/purchases/paginate",
    method: "post",
    action: purchaseActions.paginate,
  }, {
    url: "/purchases/count",
    method: "get",
    action: purchaseActions.count,
  },
];

module.exports = purchaseRoutes;