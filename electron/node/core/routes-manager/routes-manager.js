const express = require("express");
const router = express.Router();
const r = require("ramda");
const routes = include("node/core/app-manager").routes;
const withBasicMiddlewareAction = include("node/core/middleware-manager");

const demo =  {
  url: "/test",
  method: "get",
  action: withBasicMiddlewareAction.withBasicMiddlewareAction({}),
}

const createRoute = (wrapper, route) => {
  const p1 = "preAuthenticate";
  const p2 = "authenticate";
  const p3 = "postAuthenticate";
  const p4 = "validate";
  const p5 = "execute";
  const p6 = "postExecute";
  const c = route.action;
  wrapper[route.method](route.url, c[p1], c[p2], c[p3], c[p4], c[p5], c[p6]);
};

if (config.routes.routeTest) {
  createRoute(router, demo);
}

r.forEach(route => createRoute(router, route), routes);

module.exports = router;