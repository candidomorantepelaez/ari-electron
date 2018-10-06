const discountActions = include("app/discount/actions");

const discountRoutes = [
  {
    url: "/discount",
    method: "post",
    action: discountActions.save
  }, {
    url: "/discount/:id",
    method: "put",
    action: discountActions.update,
  }, {
    url: "/discount/:id",
    method: "get",
    action: discountActions.findOne,
  }, {
    url: "/discount/:id",
    method: "delete",
    action: discountActions.remove,
  }, {
    url: "/discounts/search",
    method: "post",
    action: discountActions.search,
  }, {
    url: "/discounts/list",
    method: "get",
    action: discountActions.list,
  }, {
    url: "/discounts/paginate",
    method: "post",
    action: discountActions.paginate,
  }, {
    url: "/discounts/count",
    method: "get",
    action: discountActions.count,
  },
];

module.exports = discountRoutes;