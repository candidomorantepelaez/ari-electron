const routeActions = include("app/route/actions");

const routeRoutes = [
  {
    url: "/route",
    method: "post",
    action: routeActions.save
  }, {
    url: "/route/:id",
    method: "put",
    action: routeActions.update,
  }, {
    url: "/route/:id",
    method: "get",
    action: routeActions.findOne,
  }, {
    url: "/route/:id",
    method: "delete",
    action: routeActions.remove,
  }, {
    url: "/routes/search",
    method: "post",
    action: routeActions.search,
  }, {
    url: "/routes/list",
    method: "get",
    action: routeActions.list,
  }, {
    url: "/routes/paginate",
    method: "post",
    action: routeActions.paginate,
  }, {
    url: "/routes/count",
    method: "get",
    action: routeActions.count,
  },
];

module.exports = routeRoutes;