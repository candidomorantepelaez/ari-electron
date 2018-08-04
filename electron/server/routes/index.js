const express = require("express");
const router = express.Router();

// Controllers
const ClientController = include("server/controllers/client-controller");
const RouteController = include("server/controllers/route-controller");
const ProductController = include("server/controllers/product-controller");
const DiscountController = include("server/controllers/discount-controller");
const SaleController = include("server/controllers/sale-controller");
const ConfigController = include("server/controllers/config-controller");
const InvoiceController = include("server/controllers/invoice-controller");
const UserController = include("server/controllers/user-controller");

// Middlewares
const AuthMiddleware = include("server/middlewares/auth-middleware");
const UserValidations = include("server/validations/user-validations");
const ClientValidations = include("server/validations/client-validations");

/* RUTAS CLIENTE */
router.post("/api/client", ClientValidations.validateClientForCreate, ClientController.save);
router.put("/api/client", ClientController.update);
router.get("/api/client/:id", ClientController.findOne);
router.get("/api/client/:id/route", ClientController.findOneWithRuta);
router.delete("/api/client/:id", ClientController.remove);
router.post("/api/clients", ClientController.find);
router.get("/api/clients/list", ClientController.list);
router.get("/api/clients/list/route", ClientController.listWithRuta);
router.get("/api/clients/count", ClientController.count);

/* RUTAS RUTA */
router.post("/api/route", RouteController.save);
router.put("/api/route", RouteController.update);
router.get("/api/route/:id", RouteController.findOne);
router.delete("/api/route/:id", RouteController.remove);
router.post("/api/routes", RouteController.find);
router.get("/api/routes/list", RouteController.list);
router.get("/api/routes/count", RouteController.count);

/* RUTAS PRODUCTOS */
router.post("/api/product", ProductController.save);
router.put("/api/product", ProductController.update);
router.get("/api/product/:id", ProductController.findOne);
router.delete("/api/product/:id", ProductController.remove);
router.post("/api/products", ProductController.find);
router.get("/api/products/list", ProductController.list);
router.get("/api/products/count", ProductController.count);

/* RUTAS PROMOCIONES */
router.post("/api/discount", DiscountController.save);
router.put("/api/discount", DiscountController.update);
router.get("/api/discount/:id", DiscountController.findOne);
router.delete("/api/discount/:id", DiscountController.remove);
router.post("/api/discounts", DiscountController.find);
router.get("/api/discounts/list", DiscountController.list);
router.get("/api/discounts/count", DiscountController.count);

/* RUTAS VENTAS */
router.post("/api/sale", SaleController.save);
router.put("/api/sale",   SaleController.update);
router.get("/api/sale/:id",  SaleController.findOne);
router.delete("/api/sale/:id",  SaleController.remove);
router.post("/api/sales",  SaleController.find);
router.get("/api/sales/list",  SaleController.list);
router.get("/api/sales/count",  SaleController.count);

/* RUTAS CONFIG */
router.post("/api/config",  ConfigController.save);
router.put("/api/config",  ConfigController.update);
router.get("/api/config/:id",  ConfigController.findOne);
router.delete("/api/config/:id",  ConfigController.remove);
router.post("/api/configs",  ConfigController.find);
router.get("/api/configs/list",  ConfigController.list);
router.get("/api/configs/count",  ConfigController.count);

/* RUTAS INFORME */
router.post("/api/invoice", InvoiceController.test);

/* RUTAS USER */
router.post("/credentials", AuthMiddleware.createToken);
router.get("/logout", AuthMiddleware.deleteToken);

module.exports = router;//exportamos las routes
