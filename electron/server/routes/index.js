var express = require('express');
var router = express.Router();

var ClientesController = require('./../controllers/clientes-controller');
var RutasController = require('./../controllers/rutas-controller');
var ProductosController = require('./../controllers/productos-controller');
var PromocionesController = require('./../controllers/promociones-controller');
var VentasController = require('./../controllers/ventas-controller');
var ConfigController = require('./../controllers/config-controller');
var FacturaController = require('./../controllers/factura-controller');

/* GET home page. */
router.get('/', ClientesController.index);
/* RUTAS CLIENTE */
router.post('/api/cliente', ClientesController.save);
router.put('/api/cliente', ClientesController.update);
router.get('/api/cliente/:id', ClientesController.findOne);
router.get('/api/cliente/:id/ruta', ClientesController.findOneWithRuta);
router.delete('/api/cliente/:id', ClientesController.remove);
router.post('/api/clientes', ClientesController.find);
router.get('/api/clientes/list', ClientesController.list);
router.get('/api/clientes/list/ruta', ClientesController.listWithRuta);
router.get('/api/clientes/count', ClientesController.count);

/* RUTAS RUTA */
router.post('/api/ruta', RutasController.save);
router.put('/api/ruta', RutasController.update);
router.get('/api/ruta/:id', RutasController.findOne);
router.delete('/api/ruta/:id', RutasController.remove);
router.post('/api/rutas', RutasController.find);
router.get('/api/rutas/list', RutasController.list);
router.get('/api/rutas/count', RutasController.count);

/* RUTAS PRODUCTOS */
router.post('/api/producto', ProductosController.save);
router.put('/api/producto', ProductosController.update);
router.get('/api/producto/:id', ProductosController.findOne);
router.delete('/api/producto/:id', ProductosController.remove);
router.post('/api/productos', ProductosController.find);
router.get('/api/productos/list', ProductosController.list);
router.get('/api/productos/count', ProductosController.count);

/* RUTAS PROMOCIONES */
router.post('/api/promocion', PromocionesController.save);
router.put('/api/promocion', PromocionesController.update);
router.get('/api/promocion/:id', PromocionesController.findOne);
router.delete('/api/promocion/:id', PromocionesController.remove);
router.post('/api/promociones', PromocionesController.find);
router.get('/api/promociones/list', PromocionesController.list);
router.get('/api/promociones/count', PromocionesController.count);

/* RUTAS VENTAS */
router.post('/api/venta', VentasController.save);
router.put('/api/venta', VentasController.update);
router.get('/api/venta/:id', VentasController.findOne);
router.delete('/api/venta/:id', VentasController.remove);
router.post('/api/ventas', VentasController.find);
router.get('/api/ventas/list', VentasController.list);
router.get('/api/ventas/count', VentasController.count);

/* RUTAS CONFIG */
router.post('/api/config', ConfigController.save);
router.put('/api/config', ConfigController.update);
router.get('/api/config/:id', ConfigController.findOne);
router.delete('/api/config/:id', ConfigController.remove);
router.post('/api/configs', ConfigController.find);
router.get('/api/configs/list', ConfigController.list);
router.get('/api/configs/count', ConfigController.count);

/* RUTAS INFORME */
router.post('/api/factura', FacturaController.prueba);

module.exports = router;//exportamos las rutas
