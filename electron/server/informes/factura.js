var xl = require('excel4node');
var modulos = require('./modulos-informe');

function crearFactura(factura){
    //creamos libro
    factura.libro = new xl.Workbook({dateFormat : 'd / m  hh: mm: ss: '});
    //creamos la primera pagina
    factura = modulos.crearPaginaBasica(factura);
    //ponemos titulo factura
    factura = modulos.meterTituloFactura(factura);
    //ponemos datos ari
    factura = modulos.meterDatosAri(factura);
    //ponemos los datos del cliente
    factura = modulos.meterDatosCliente(factura);
    //ponemos numeroFactura y fecha
    factura = modulos.meterFechaYNumeroFactura(factura);
    //ponemos Titulo Productos
    factura = modulos.meterTitulosProductos(factura);
    //ponemos la base imponible
    factura = modulos.meterBaseImponible(factura);
    //ponemos el iva
    factura = modulos.meterIva(factura);
    //ponemos el total de la factura
    factura = modulos.meterTotalFactura(factura);
    //ponemos la forma de pago
    factura = modulos.meterFormaPago(factura);
    //ponemos las observaciones
    factura = modulos.meterObservaciones(factura);
    //ponemos el mensaje final
    factura = modulos.meterMensajeFinal(factura);
    //ponemos la gota de agua de la empresa
    factura = modulos.meterGotaAguaEmpresa(factura);
    //ponemos los estilos a los productos
    factura = modulos.meterEstilosProductos(factura);
    //ponemos los productos
    factura = modulos.meterProductos(factura);
    //cerramos libro
    factura.libro.write('./public/facturas/factura'+factura.numeroFactura+'.xlsx');
}

module.exports = {
    crearFactura
}