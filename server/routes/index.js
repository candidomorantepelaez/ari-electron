var express = require('express');
var router = express.Router();

var ClientesController = require('./../controllers/clientes-controller');

/* GET home page. */
router.get('/', ClientesController.index);
router.post('/api/cliente', ClientesController.save);
router.put('/api/cliente', ClientesController.update);
router.get('/api/cliente/:id', ClientesController.findOne);
router.delete('/api/cliente/:id', ClientesController.remove);
router.post('/api/clientes', ClientesController.find);
router.get('/api/clientes/list', ClientesController.list);

module.exports = router;//exportamos las rutas 
