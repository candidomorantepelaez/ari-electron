const clientActions = include("app/client/actions");

const clientRoutes = [
  {
    url: "/client",
    method: "post",
    action: clientActions.save
  }, {
    url: "/client/:id",
    method: "put",
    action: clientActions.update,
  }, {
    url: "/client/:id",
    method: "get",
    action: clientActions.findOne,
  }, {
    url: "/client/:id",
    method: "delete",
    action: clientActions.remove,
  }, {
    url: "/clients/search",
    method: "post",
    action: clientActions.search,
  }, {
    url: "/clients/list",
    method: "get",
    action: clientActions.list,
  }, {
    url: "/clients/paginate",
    method: "post",
    action: clientActions.paginate,
  }, {
    url: "/clients/count",
    method: "get",
    action: clientActions.count,
  },
];

module.exports = clientRoutes;