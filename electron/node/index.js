const express = require("express");
const NodeApp = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const includeCors = include("node/config/http/cors");
const routes = include("app/routes/index");
const handler404 = include("node/config/routes/handler404");

NodeApp.use(cookieParser());

NodeApp.use(express.static(__dirname + "/public"));

NodeApp.use(bodyParser.json());
NodeApp.use(bodyParser.urlencoded({extended:true}));

NodeApp.use(includeCors);

NodeApp.use("/", routes);

NodeApp.use(handler404);

NodeApp.listen(8080, function () {
  logger.log('info', "Server listen in localhost:8080");
});

