const warehouseActions = include("app/warehouse/actions");

const warehouseRoutes = [
  {
    url: "/warehouse",
    method: "post",
    action: warehouseActions.save
  }, {
    url: "/warehouse/:id",
    method: "put",
    action: warehouseActions.update,
  }, {
    url: "/warehouse/:id",
    method: "get",
    action: warehouseActions.findOne,
  }, {
    url: "/warehouse/:id",
    method: "delete",
    action: warehouseActions.remove,
  }, {
    url: "/warehouses/search",
    method: "post",
    action: warehouseActions.search,
  }, {
    url: "/warehouses/list",
    method: "get",
    action: warehouseActions.list,
  }, {
    url: "/warehouses/paginate",
    method: "post",
    action: warehouseActions.paginate,
  }, {
    url: "/warehouses/count",
    method: "get",
    action: warehouseActions.count,
  },
];

module.exports = warehouseRoutes;