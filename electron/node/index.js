const express = require("express");
const NodeApp = express();
const helmet = require('helmet')
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const includeCors = include("node/config/http/cors");
const router = include("node/config/routes/index");
const handler404 = include("node/config/routes/handler404");

NodeApp.use(helmet())

NodeApp.use(cookieParser());

NodeApp.use(express.static(__dirname + "/public"));

NodeApp.use(bodyParser.json());
NodeApp.use(bodyParser.urlencoded({extended:true}));

NodeApp.use(includeCors);

NodeApp.use("/", router);

NodeApp.use(handler404);

NodeApp.listen(8080, function () {
  logger.log('info', "Server listen in localhost:8080");
});

