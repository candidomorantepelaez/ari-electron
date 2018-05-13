const facturaUtils = require("./../informes/factura");

let prueba = (req, res, next) => {
    facturaUtils.crearFactura();
    facturaUtils.rellenarFactura();
    facturaUtils.cerrarLibro();
    res.send("ok");
}		
