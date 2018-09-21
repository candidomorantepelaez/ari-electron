const withMiddlewareAction = include("node/core/actions/middleware-action");
const r = require("ramda");

const customLoginAction = include("app/actions/account/login-action");
const customLogoutAction = include("app/actions/account/logout-action");

const loginAction = r.merge(withMiddlewareAction({}), customLoginAction);
const logoutAction = r.merge(withMiddlewareAction({}), customLogoutAction);

module.exports = {
  loginAction,
  logoutAction,
}