const assert = require("assert");
const accountAction = include("node/target/actions/account");
const customAccountRoute = include("app/routes/account");
const r = require("ramda");
const AccountSchema = include("node/config/data-types/auth-action");

assert.ok(AccountSchema.isValidate(accountAction), "action not valid!!");

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

module.exports = accountRoutes;