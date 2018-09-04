const accountAction = include("node/target/actions/account");
const customAccountRoute = include("app/routes/account");
const r = require("ramda");

const accountRoutes = [
  {
    url: "/credentials",
    method: "post",
    action: accountAction.loginAction
  },
  {
    url: "/logout",
    method: "get",
    action: accountAction.logoutAction
  },
];

module.exports = r.merge(accountRoutes, customAccountRoute);