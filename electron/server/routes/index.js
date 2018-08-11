const express = require("express");
const router = express.Router();
const ramda = require("ramda");

const apiVersion = "/api/v1";

// Middlewares
const AuthMiddleware = include("server/middlewares/auth-middleware");

// Controllers
const AppController = include("server/controllers/app-controller");
const BuyController = include("server/controllers/buy-controller");
const ClientController = include("server/controllers/client-controller");
const DiscountController = include("server/controllers/discount-controller");
const InvoiceController = include("server/controllers/invoice-controller");
const ProductController = include("server/controllers/product-controller");
const RouteController = include("server/controllers/route-controller");
const SaleController = include("server/controllers/sale-controller");
const SellerController = include("server/controllers/seller-controller");
const WharehouseController = include("server/controllers/wharehouse-controller");

const withBasicRoute = (wrapper, name, controller) => {
  wrapper.post(`${apiVersion}/${name}`, AuthMiddleware.verifyToken, controller.save);
  wrapper.put(`${apiVersion}/${name}`, AuthMiddleware.verifyToken, controller.update);
  wrapper.get(`${apiVersion}/${name}/:id`, AuthMiddleware.verifyToken, controller.findOne);
  wrapper.delete(`${apiVersion}/${name}/:id`, AuthMiddleware.verifyToken, controller.remove);
  wrapper.post(`${apiVersion}/${name}s`, AuthMiddleware.verifyToken, controller.find);
  wrapper.get(`${apiVersion}/${name}s/list`, AuthMiddleware.verifyToken, controller.list);
  wrapper.get(`${apiVersion}/${name}s/count`, AuthMiddleware.verifyToken, controller.count);
  return wrapper;
};

const routes = [
  { name: "app", controller: AppController },
  { name: "buy", controller: BuyController },
  { name: "client", controller: ClientController },
  { name: "discount", controller: DiscountController },
  { name: "invoice", controller: InvoiceController },
  { name: "product", controller: ProductController },
  { name: "route", controller: RouteController },
  { name: "sale", controller: SaleController },
  { name: "seller", controller: SellerController },
  { name: "wharehouse", controller: WharehouseController },
];

ramda.forEach(route => withBasicRoute(router, route.name, route.controller), routes);

/*
// App Routes
router.post(apiVersion+"/app", AuthMiddleware.verifyToken, AppController.save);
router.put(apiVersion+"/app", AuthMiddleware.verifyToken, AppController.update);
router.get(apiVersion+"/app/:id", AuthMiddleware.verifyToken, AppController.findOne);
router.delete(apiVersion+"/app/:id", AuthMiddleware.verifyToken, AppController.remove);
router.post(apiVersion+"/apps", AuthMiddleware.verifyToken, AppController.find);
router.get(apiVersion+"/apps/list", AuthMiddleware.verifyToken, AppController.list);
router.get(apiVersion+"/apps/count", AuthMiddleware.verifyToken, AppController.count);

// Buy Routes
router.post(apiVersion+"/buy", AuthMiddleware.verifyToken, BuyController.save);
router.put(apiVersion+"/buy", AuthMiddleware.verifyToken, BuyController.update);
router.get(apiVersion+"/buy/:id", AuthMiddleware.verifyToken, BuyController.findOne);
router.delete(apiVersion+"/buy/:id", AuthMiddleware.verifyToken, BuyController.remove);
router.post(apiVersion+"/buys", AuthMiddleware.verifyToken, BuyController.find);
router.get(apiVersion+"/buys/list", AuthMiddleware.verifyToken, BuyController.list);
router.get(apiVersion+"/buys/count", AuthMiddleware.verifyToken, BuyController.count);

// Client Routes
router.post(apiVersion+"/client", AuthMiddleware.verifyToken, ClientController.save);
router.put(apiVersion+"/client", AuthMiddleware.verifyToken, ClientController.update);
router.get(apiVersion+"/client/:id", AuthMiddleware.verifyToken, ClientController.findOne);
router.delete(apiVersion+"/client/:id", AuthMiddleware.verifyToken, ClientController.remove);
router.post(apiVersion+"/clients", AuthMiddleware.verifyToken, ClientController.find);
router.get(apiVersion+"/clients/list", AuthMiddleware.verifyToken, ClientController.list);
router.get(apiVersion+"/clients/count", AuthMiddleware.verifyToken, ClientController.count);

// Discount Routes
router.post(apiVersion+"/discount", AuthMiddleware.verifyToken, DiscountController.save);
router.put(apiVersion+"/discount", AuthMiddleware.verifyToken, DiscountController.update);
router.get(apiVersion+"/discount/:id", AuthMiddleware.verifyToken, DiscountController.findOne);
router.delete(apiVersion+"/discount/:id", AuthMiddleware.verifyToken, DiscountController.remove);
router.post(apiVersion+"/discounts", AuthMiddleware.verifyToken, DiscountController.find);
router.get(apiVersion+"/discounts/list", AuthMiddleware.verifyToken, DiscountController.list);
router.get(apiVersion+"/discounts/count", AuthMiddleware.verifyToken, DiscountController.count);

// Invoice Routes
router.post(apiVersion+"/invoice", AuthMiddleware.verifyToken, InvoiceController.save);
router.put(apiVersion+"/invoice", AuthMiddleware.verifyToken, InvoiceController.update);
router.get(apiVersion+"/invoice/:id", AuthMiddleware.verifyToken, InvoiceController.findOne);
router.delete(apiVersion+"/invoice/:id", AuthMiddleware.verifyToken, InvoiceController.remove);
router.post(apiVersion+"/invoices", AuthMiddleware.verifyToken, InvoiceController.find);
router.get(apiVersion+"/invoices/list", AuthMiddleware.verifyToken, InvoiceController.list);
router.get(apiVersion+"/invoices/count", AuthMiddleware.verifyToken, InvoiceController.count);

// Product Routes
router.post(apiVersion+"/product", AuthMiddleware.verifyToken, ProductController.save);
router.put(apiVersion+"/product", AuthMiddleware.verifyToken, ProductController.update);
router.get(apiVersion+"/product/:id", AuthMiddleware.verifyToken, ProductController.findOne);
router.delete(apiVersion+"/product/:id", AuthMiddleware.verifyToken, ProductController.remove);
router.post(apiVersion+"/products", AuthMiddleware.verifyToken, ProductController.find);
router.get(apiVersion+"/products/list", AuthMiddleware.verifyToken, ProductController.list);
router.get(apiVersion+"/products/count", AuthMiddleware.verifyToken, ProductController.count);

// Routes Routes
router.post(apiVersion+"/route", AuthMiddleware.verifyToken, RouteController.save);
router.put(apiVersion+"/route", AuthMiddleware.verifyToken, RouteController.update);
router.get(apiVersion+"/route/:id", AuthMiddleware.verifyToken, RouteController.findOne);
router.delete(apiVersion+"/route/:id", AuthMiddleware.verifyToken, RouteController.remove);
router.post(apiVersion+"/routes", AuthMiddleware.verifyToken, RouteController.find);
router.get(apiVersion+"/routes/list", AuthMiddleware.verifyToken, RouteController.list);
router.get(apiVersion+"/routes/count", AuthMiddleware.verifyToken, RouteController.count);

// Sales Routes
router.post(apiVersion+"/sale", AuthMiddleware.verifyToken, SaleController.save);
router.put(apiVersion+"/sale", AuthMiddleware.verifyToken, SaleController.update);
router.get(apiVersion+"/sale/:id", AuthMiddleware.verifyToken, SaleController.findOne);
router.delete(apiVersion+"/sale/:id", AuthMiddleware.verifyToken, SaleController.remove);
router.post(apiVersion+"/sales", AuthMiddleware.verifyToken, SaleController.find);
router.get(apiVersion+"/sales/list", AuthMiddleware.verifyToken, SaleController.list);
router.get(apiVersion+"/sales/count", AuthMiddleware.verifyToken, SaleController.count);

// Seller Routes
router.post(apiVersion+"/seller", AuthMiddleware.verifyToken, SellerController.save);
router.put(apiVersion+"/seller", AuthMiddleware.verifyToken, SellerController.update);
router.get(apiVersion+"/seller/:id", AuthMiddleware.verifyToken, SellerController.findOne);
router.delete(apiVersion+"/seller/:id", AuthMiddleware.verifyToken, SellerController.remove);
router.post(apiVersion+"/sellers", AuthMiddleware.verifyToken, SellerController.find);
router.get(apiVersion+"/sellers/list", AuthMiddleware.verifyToken, SellerController.list);
router.get(apiVersion+"/sellers/count", AuthMiddleware.verifyToken, SellerController.count);

// Seller Routes
router.post(apiVersion+"/wharehouse", AuthMiddleware.verifyToken, WharehouseController.save);
router.put(apiVersion+"/wharehouse", AuthMiddleware.verifyToken, WharehouseController.update);
router.get(apiVersion+"/wharehouse/:id", AuthMiddleware.verifyToken, WharehouseController.findOne);
router.delete(apiVersion+"/wharehouse/:id", AuthMiddleware.verifyToken, WharehouseController.remove);
router.post(apiVersion+"/wharehouses", AuthMiddleware.verifyToken, WharehouseController.find);
router.get(apiVersion+"/wharehouses/list", AuthMiddleware.verifyToken, WharehouseController.list);
router.get(apiVersion+"/wharehouses/count", AuthMiddleware.verifyToken, WharehouseController.count);
*/

// Auth Routes
router.post("/credentials", AuthMiddleware.createToken);
router.get("/logout", AuthMiddleware.deleteToken);

module.exports = router;
