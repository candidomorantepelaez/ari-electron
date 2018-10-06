const storeActions = include("app/store/actions");

const storeRoutes = [
  {
    url: "/store",
    method: "post",
    action: storeActions.save
  }, {
    url: "/store/:id",
    method: "put",
    action: storeActions.update,
  }, {
    url: "/store/:id",
    method: "get",
    action: storeActions.findOne,
  }, {
    url: "/store/:id",
    method: "delete",
    action: storeActions.remove,
  }, {
    url: "/stores/search",
    method: "post",
    action: storeActions.search,
  }, {
    url: "/stores/list",
    method: "get",
    action: storeActions.list,
  }, {
    url: "/stores/paginate",
    method: "post",
    action: storeActions.paginate,
  }, {
    url: "/stores/count",
    method: "get",
    action: storeActions.count,
  },
];

module.exports = storeRoutes;
