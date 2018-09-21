const appAction = include("node/target/actions/app");
const customAppRoute = include("app/routes/app");
const ActionSchema = include("node/core/data-types/default-action");
const RouteSchema = include("node/core/data-types/routes");
const r = require("ramda");
const assert = require("assert");

assert.ok(ActionSchema.isValidate(appAction), "action not valid!!");

const appRoutes = [
  {
    url: "/app",
    method: "post",
    action: appAction.saveAction,
  },
  {
    url: "/app",
    method: "put",
    action: appAction.updateAction,
  },
  {
    url: "/app/find",
    method: "post",
    action: appAction.findAction,
  },
  {
    url: "/app/all",
    method: "get",
    action: appAction.allAction,
  },
  {
    url: "/app/count",
    method: "get",
    action: appAction.countAction,
  },
  {
    url: "/app/:id",
    method: "get",
    action: appAction.findByIdAction,
  },
  {
    url: "/app/:id",
    method: "delete",
    action: appAction.removeAction,
  },
];

const routesManager = () => {
  if (RouteSchema.isValidate(customAppRoute)) {
    return r.concat(appRoutes, customAppRoute);
  }
  return appRoutes;
}

module.exports = routesManager();