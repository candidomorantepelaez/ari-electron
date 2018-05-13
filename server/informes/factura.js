'use strict';

var xl = require('excel4node');
var fs = require('fs');

var libro = null;
var paginaUno = null;
var fecha = null;

function crearFactura(){
    libro = new xl.Workbook({dateFormat : 'd / m  hh: mm: ss: '});
    fecha = new Date();

    paginaUno = libro.addWorksheet('factura');
}

function rellenarFactura() {
    paginaUno.cell(1,1).string('hola');
    paginaUno.cell(1,2).string('hello');
}

function cerrarLibro() {
    libro.write('./factura.xlsx');
}

module.exports = {
    crearFactura,
    rellenarFactura,
    cerrarLibro
}