const sellerActions = include("app/seller/actions");

const sellerRoutes = [
  {
    url: "/seller",
    method: "post",
    action: sellerActions.save
  }, {
    url: "/seller/:id",
    method: "put",
    action: sellerActions.update,
  }, {
    url: "/seller/:id",
    method: "get",
    action: sellerActions.findOne,
  }, {
    url: "/seller/:id",
    method: "delete",
    action: sellerActions.remove,
  }, {
    url: "/sellers/search",
    method: "post",
    action: sellerActions.search,
  }, {
    url: "/sellers/list",
    method: "get",
    action: sellerActions.list,
  }, {
    url: "/sellers/paginate",
    method: "post",
    action: sellerActions.paginate,
  }, {
    url: "/sellers/count",
    method: "get",
    action: sellerActions.count,
  },
];

module.exports = sellerRoutes;