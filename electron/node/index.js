const express = require("express");
const NodeApp = express();
const helmet = require('helmet')
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const httpManager = include("node/core/http-manager");
const routesManager = include("node/core/routes-manager");
const appManager = include("node/core/app-manager");

NodeApp.use(helmet())

NodeApp.use(cookieParser());

NodeApp.use(express.static(__dirname + "/public"));

NodeApp.use(bodyParser.json());
NodeApp.use(bodyParser.urlencoded({extended:true}));

NodeApp.use(httpManager.getCors);

NodeApp.use("/", routesManager.createRouter(appManager));

NodeApp.use(routesManager.handler404);

NodeApp.listen(8080, function () {
  logger.log('info', "Server listen in localhost:8080");
});
