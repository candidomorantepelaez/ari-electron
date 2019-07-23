const accountActions = include("app/account/actions");

const accountRoutes = [
  {
    url: "/login",
    method: "post",
    action: accountActions.loginAction
  },
  {
    url: "/logout",
    method: "get",
    action: accountActions.logoutAction
  },
];

module.exports = accountRoutes;