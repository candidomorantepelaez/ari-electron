const facturaUtils = require("./../informes/factura");

let prueba = (req, res, next) => {
    facturaUtils.crearFactura(req.body);
    res.send("ok");
}

module.exports = {
	prueba
};