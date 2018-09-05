const assert = require("assert");
const express = require("express");
const router = express.Router();
const r = require("ramda");
const routeSchema = include("node/config/data-types/routes");

const accountRoutes = include("node/target/routes/account");
const appRoutes = include("node/target/routes/app");

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

assert.ok(routeSchema.isValidate(appRoutes), "route not valid!!");
assert.ok(routeSchema.isValidate(accountRoutes), "route not valid!!");

r.forEach(obj => createRoute(router, obj), appRoutes);
r.forEachObjIndexed(obj => createRoute(router, obj), accountRoutes);

module.exports = router;