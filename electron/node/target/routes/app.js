const appAction = include("node/target/actions/app");
const customAppRoute = include("app/routes/app");
const r = require("ramda");

const appRoutes = [
  {
    url: "/app",
    method: "post",
    action: appAction.saveAction
  },
  {
    url: "/app",
    method: "put",
    action: appAction.updateAction
  },
  {
    url: "/app/find",
    method: "post",
    action: appAction.findAction
  },
  {
    url: "/app/all",
    method: "get",
    action: appAction.allAction
  },
  {
    url: "/app/count",
    method: "get",
    action: appAction.countAction
  },
  {
    url: "/app/:id",
    method: "get",
    action: appAction.findByIdAction
  },
  {
    url: "/app/:id",
    method: "delete",
    action: appAction.removeAction
  },
];

module.exports = r.merge(appRoutes, customAppRoute);