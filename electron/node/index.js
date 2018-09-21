const express = require("express");
const NodeApp = express();
const helmet = require('helmet')
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const httpManager = include("node/core/http-manager");
const routerManager = include("node/core/routes-manager");

NodeApp.use(helmet())

NodeApp.use(cookieParser());

NodeApp.use(express.static(__dirname + "/public"));

NodeApp.use(bodyParser.json());
NodeApp.use(bodyParser.urlencoded({extended:true}));

NodeApp.use(httpManager.getCors);

NodeApp.use("/", routerManager.router);

NodeApp.use(routerManager.handler404);

NodeApp.listen(8080, function () {
  logger.log('info', "Server listen in localhost:8080");
});
