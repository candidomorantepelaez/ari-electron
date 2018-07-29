var estilo = require('./estilos-informe');

function crearPagina(factura){
  //creamos la pagina del libro
  factura.pagina = factura.libro.addWorksheet('factura '+factura.nombre+' pag:'+factura.numero, {
    'margins': {
        'bottom': 0.1,
        'left': 0.1,
        'right': 0.5,
        'top': 0.1
    },
    'sheetFormat': {
        'defaultRowHeight': 18.83,
        'defaultColWidth': 10.41
    },
    'printOptions': {
        'centerHorizontal': true,
        'centerVertical': true,
        'printGridLines': false,
        'printHeadings': false
    },
    'pageSetup': {
        'fitToHeight': 1,
        'fitToWidth': 1,
        'scale': 80,
        'paperSize': 'A4_PAPER'
    }
  });
  return factura;
}

function meterImagenes(factura){
  factura.pagina.addImage(estilo.imagenLogoAri);
  return factura;
}

function setearAltoYAnchoColumnas(factura){
  factura.pagina.row(1).setHeight(202.67);
  factura.pagina.row(2).setHeight(24.54);
  factura.pagina.column(1).setWidth(7.83);
  factura.pagina.column(2).setWidth(31.63);
  factura.pagina.column(3).setWidth(20.93);
  factura.pagina.column(4).setWidth(13.53);
  factura.pagina.column(5).setWidth(13.67);
  factura.pagina.column(6).setWidth(13.81);
  factura.pagina.column(7).setWidth(10.64);
  factura.pagina.column(8).setWidth(3.39);
  return factura;
}

function meterTituloFactura(factura){
  factura.pagina
    .cell(2, 2)
    .string('FACTURA')
    .style(
      estilo.crearEstilo([
        estilo.titulo,
        estilo.alineacionIzquierda,
        estilo.colorFondoBlanco,
        estilo.sinBordes
    ])
  );
  return factura;
}

function meterDatosAri(factura){
  factura = estilosDatosAri(factura);
  factura = escribirDatosAri(factura);
  return factura;
}

function escribirDatosAri(factura){
  factura.pagina.cell(2, 5, 2, 7, true).string(factura.datosAri.nombre);
  factura.pagina.cell(3, 5, 3, 7, true).string(factura.datosAri.direccion.poligono);
  factura.pagina.cell(4, 5, 4, 7, true).string(factura.datosAri.direccion.calle);
  factura.pagina.cell(5, 5, 5, 7, true).string(factura.datosAri.direccion.poblacion+" "+factura.datosAri.direccion.provincia);
  factura.pagina.cell(6, 5, 6, 7, true).string(factura.datosAri.nif);
  factura.pagina.cell(7, 5, 7, 7, true).string(factura.datosAri.telefono);
  factura.pagina.cell(8, 5, 8, 7, true).string(factura.datosAri.email);
  factura.pagina.cell(9, 5, 9, 7, true).string(factura.datosAri.web);
  return factura;
}

function estilosDatosAri(factura){
  var estiloDatosAri = estilo.crearEstilo([
    estilo.bold,
    estilo.alineacionIzquierda,
    estilo.colorFondoBlanco,
    estilo.sinBordes])
  factura.pagina.cell(2, 5, 2, 7, true).style(estiloDatosAri);
  factura.pagina.cell(3, 5, 3, 7, true).style(estiloDatosAri);
  factura.pagina.cell(4, 5, 4, 7, true).style(estiloDatosAri);
  factura.pagina.cell(5, 5, 5, 7, true).style(estiloDatosAri);
  factura.pagina.cell(6, 5, 6, 7, true).style(estiloDatosAri);
  factura.pagina.cell(7, 5, 7, 7, true).style(estiloDatosAri);
  factura.pagina.cell(8, 5, 8, 7, true).style(estiloDatosAri);
  factura.pagina.cell(9, 5, 9, 7, true).style(estiloDatosAri);
  return factura;
}

function crearPaginaBasica(factura){
  factura = crearPagina(factura);
  factura = meterImagenes(factura);
  factura = setearAltoYAnchoColumnas(factura);
  return factura;
}

function meterDatosCliente(factura){
  factura = estilosDatosCliente(factura);
  factura = escribirDatosCliente(factura);
  return factura;
}

function estilosDatosCliente(factura){
  var estiloTituloDatosEmpresa = estilo
    .crearEstilo([
      estilo.bold,
      estilo.alineacionCentro,
      estilo.colorFondoClaro,
      estilo.conBordes
    ]);
  factura.pagina.cell(5, 2, 5, 3, true).style(estiloTituloDatosEmpresa);
  var estiloEmpresa = estilo
    .crearEstilo([
      estilo.bold,
      estilo.alineacionIzquierda,
      estilo.colorFondoBlanco,
      estilo.conBordes
    ]);
  factura.pagina.cell(6, 2, 6, 3, true).style(estiloEmpresa);
  factura.pagina.cell(7, 2, 7, 3, true).style(estiloEmpresa);
  factura.pagina.cell(8, 2, 8, 3, true).style(estiloEmpresa);
  factura.pagina.cell(9, 2, 9, 3, true).style(estiloEmpresa);
  factura.pagina.cell(10, 2, 10, 3, true).style(estiloEmpresa);
  factura.pagina.cell(11, 2, 11, 3, true).style(estiloEmpresa);
  factura.pagina.cell(12, 2, 12, 3, true).style(estiloEmpresa);
  return factura;
}

function escribirDatosCliente(factura){
  factura.pagina.cell(5, 2, 5, 3, true).string('DATOS DEL CLIENTE');
  factura.pagina.cell(6, 2, 6, 3, true).string('NOMBRE Y APELLIDOS: '+factura.datosEmpresa.nombre);
  factura.pagina.cell(7, 2, 7, 3, true).string('DIRECCIÓN: '+factura.datosEmpresa.direccion.calle);
  factura.pagina.cell(8, 2, 8, 3, true).string('POBLACION: '+factura.datosEmpresa.direccion.poblacion);
  factura.pagina.cell(9, 2, 9, 3, true).string('PROVINCIA: '+factura.datosEmpresa.direccion.provincia);
  factura.pagina.cell(10, 2, 10, 3, true).string('CIF - NIF: '+factura.datosEmpresa.nif);
  factura.pagina.cell(11, 2, 11, 3, true).string('TELEFONO: '+factura.datosEmpresa.telefono);
  factura.pagina.cell(12, 2, 12, 3, true).string('EMAIL: '+factura.datosEmpresa.email);
  return factura;
}

function estiloNumeroFacturaYFecha(factura){
  var estiloNumFacTitulo = estilo
    .crearEstilo([
      estilo.bold,
      estilo.alineacionDerecha,
      estilo.colorFondoOscuro,
      estilo.conBordes
    ]);
  //estilo numFacturaTitulo
  factura.pagina.cell(3, 2).style(estiloNumFacTitulo);
  factura.pagina.cell(4, 2).style(estiloNumFacTitulo);
  var estiloNumFacTexto = estilo
    .crearEstilo([
      estilo.bold,
      estilo.alineacionIzquierda,
      estilo.colorFondoClaro,
      estilo.conBordes
    ]);
  //estilo estiloNumFacTexto
  factura.pagina.cell(3, 3).style(estiloNumFacTexto);
  factura.pagina.cell(4, 3).style(estiloNumFacTexto);
  return factura;
}

function escribirNumeroFacturaYFecha(factura){
  //Numero Factura
  factura.pagina.cell(3, 2).string('Nº de Factura:');
  factura.pagina.cell(3, 3).string(factura.numeroFactura);
  //Fecha Factura
  factura.pagina.cell(4, 2).string('Fecha');
  factura.pagina.cell(4, 3).string(factura.fechaFactura);
  return factura;
}

function meterFechaYNumeroFactura(factura){
  factura = estiloNumeroFacturaYFecha(factura);
  factura = escribirNumeroFacturaYFecha(factura);
  return factura;
}

function estiloTitulosProductos(factura){
  var estiloTituloProd = estilo
    .crearEstilo([
      estilo.bold,
      estilo.alineacionCentro,
      estilo.colorFondoClaro,
      estilo.conBordes
    ]);
  factura.pagina.cell(14, 2).style(estiloTituloProd);
  factura.pagina.cell(14, 3).style(estiloTituloProd);
  factura.pagina.cell(14, 4).style(estiloTituloProd);
  factura.pagina.cell(14, 5).style(estiloTituloProd);
  factura.pagina.cell(14, 6).style(estiloTituloProd);
  factura.pagina.cell(14, 7).style(estiloTituloProd);
  return factura;
}

function escribirTitulosProductos(factura){
  factura.pagina.cell(14, 2).string('ARTICULO');
  factura.pagina.cell(14, 3).string('CODIGO');
  factura.pagina.cell(14, 4).string('UNIDADES');
  factura.pagina.cell(14, 5).string('PRECIO UN.');
  factura.pagina.cell(14, 6).string('IVA');
  factura.pagina.cell(14, 7).string('IMPORTE');
  return factura;
}

function meterTitulosProductos(factura){
  factura = estiloTitulosProductos(factura);
  factura = escribirTitulosProductos(factura);
  return factura;
}

function meterBaseImponible(factura){
  var estiloBaseImponible = estilo
    .crearEstilo([
      estilo.bold,
      estilo.alineacionCentro,
      estilo.colorFondoBlanco,
      estilo.conBordes
    ]);
  factura.pagina.cell(28, 5, 28, 6, true).style(estiloBaseImponible);
  factura.pagina.cell(28, 7).style(estiloBaseImponible);
  factura.pagina.cell(28, 5, 28, 6, true).string('Base Imponible');
  factura.pagina.cell(28, 7).number(factura.baseImponible);
  return factura;
}

function meterIva(factura){
  var estiloIva = estilo
    .crearEstilo([
      estilo.bold,
      estilo.alineacionDerecha,
      estilo.colorFondoBlanco,
      estilo.sinBordes
    ]);
  factura.pagina.cell(30, 4).style(estiloIva);
  factura.pagina.cell(31, 7).style(estiloIva);
  var estiloIvaBordes = estilo
    .crearEstilo([
      estilo.bold,
      estilo.alineacionDerecha,
      estilo.colorFondoBlanco,
      estilo.conBordes
    ]);
  factura.pagina.cell(30, 5).style(estiloIvaBordes);
  factura.pagina.cell(30, 6).style(estiloIvaBordes);
  factura.pagina.cell(31, 5).style(estiloIvaBordes);
  factura.pagina.cell(31, 6).style(estiloIvaBordes);
  factura.pagina.cell(30, 4).string('IVA');
  factura.pagina.cell(30, 5).string('21%');
  factura.pagina.cell(30, 6).string('10%');
  factura.pagina.cell(31, 5).number(factura.iva10);
  factura.pagina.cell(31, 6).number(factura.iva21);
  factura.pagina.cell(31, 7).number(factura.ivaTotal);
  return factura;
}

function meterTotalFactura(factura){
  var estiloTotalFactura = estilo
    .crearEstilo([
      estilo.bold,
      estilo.alineacionIzquierda,
      estilo.colorFondoClaro,
      estilo.conBordes
    ]);
  factura.pagina.cell(32, 5, 32, 6, true).style(estiloTotalFactura);
  factura.pagina.cell(32, 7).style(estiloTotalFactura);
  factura.pagina.cell(32, 5, 32, 6, true).string('TOTAL FACTURA');
  factura.pagina.cell(32, 7).number(factura.totalFactura);
  return factura;
}

function meterFormaPago(factura){
  var estiloFormasPago = estilo
    .crearEstilo([
      estilo.bold,
      estilo.alineacionCentro,
      estilo.colorFondoBlanco,
      estilo.conBordes
    ]);
  factura.pagina.cell(32, 2, 33, 2, true).style(estiloFormasPago);
  factura.pagina.cell(32, 3, 33, 3, true).style(estiloFormasPago);
  factura.pagina.cell(32, 2, 33, 2, true).string('FORMA DE PAGO');
  factura.pagina.cell(32, 3, 33, 3, true).string(factura.formaPago);
  return factura;
}

function meterObservaciones(factura){
  var estiloTituloObservaciones = estilo
    .crearEstilo([
      estilo.bold,
      estilo.alineacionIzquierda,
      estilo.colorFondoBlanco,
      estilo.sinBordes
    ]);
  factura.pagina.cell(36, 2, 36, 3, 36, 4, true).style(estiloTituloObservaciones);
  var estiloObservaciones = estilo
    .crearEstilo([
      estilo.bold,
      estilo.alineacionIzquierda,
      estilo.colorFondoOscuro,
      estilo.conBordes
    ]);
  factura.pagina.cell(37, 2, 37, 4, true).style(estiloObservaciones);
  factura.pagina.cell(38, 2, 38, 4, true).style(estiloObservaciones);
  factura.pagina.cell(39, 2, 39, 4, true).style(estiloObservaciones);
  factura.pagina.cell(40, 2, 40, 4, true).style(estiloObservaciones);
  factura.pagina.cell(41, 2, 41, 4, true).style(estiloObservaciones);
  factura.pagina.cell(36, 2, 36, 4, true).string('OBSERVACIONES');
  factura.pagina.cell(38, 2, 38, 4 ,true).string(factura.observaciones);
  return factura;
}

function meterMensajeFinal(factura){
  var estiloMensaje = estilo
    .crearEstilo([
      estilo.bold,
      estilo.alineacionIzquierda,
      estilo.colorFondoBlanco,
      estilo.sinBordes
    ]);
  factura.pagina.cell(36, 6, 36, 7, true).style(estiloMensaje);
  factura.pagina.cell(36, 6, 36, 7, true).string(factura.mensajeFinal);
  return factura;
}

function meterGotaAguaEmpresa(factura){
  var estiloMensaje = estilo
    .crearEstilo([
      estilo.bold,
      estilo.alineacionIzquierda,
      estilo.colorFondoBlanco,
      estilo.sinBordes
    ]);
  factura.pagina.cell(39, 6, 39, 7, true).style(estiloMensaje);
  factura.pagina.cell(39, 6, 39, 7, true).string(factura.gotaAguaEmpresa1);
  factura.pagina.cell(40, 6, 40, 7, true).style(estiloMensaje);
  factura.pagina.cell(40, 6, 40, 7, true).string(factura.gotaAguaEmpresa2);
  return factura;
};

function meterEstilosProductos(factura){
  var estiloProductos = estilo
    .crearEstilo([
      estilo.bold,
      estilo.alineacionIzquierda,
      estilo.colorFondoBlanco,
      estilo.conBordes
    ]);

  for(var i = factura.inicioProductos; i<=27; i++){
    factura.pagina.cell(i, 2).style(estiloProductos);
    factura.pagina.cell(i, 3).style(estiloProductos);
    factura.pagina.cell(i, 4).style(estiloProductos);
    factura.pagina.cell(i, 5).style(estiloProductos);
    factura.pagina.cell(i, 6).style(estiloProductos);
    factura.pagina.cell(i, 7).style(estiloProductos);
  }
  return factura;
}

function meterProductos(factura){
  var contador = factura.inicioProductos;
  for(var i = 0; i < factura.productos.length; i++){
    factura.pagina.cell(contador, 2).string(factura.productos[i].nombre);
    factura.pagina.cell(contador, 3).string(factura.productos[i].codigo);
    factura.pagina.cell(contador, 4).number(factura.productos[i].unidades);
    factura.pagina.cell(contador, 5).number(factura.productos[i].precioUnidad);
    factura.pagina.cell(contador, 6).string(factura.productos[i].iva);
    factura.pagina.cell(contador, 7).number(factura.productos[i].precioTotal);
    contador++;
  }
  return factura;
}

module.exports = {
  crearPaginaBasica,
  meterTituloFactura,
  meterDatosAri,
  meterDatosCliente,
  meterFechaYNumeroFactura,
  meterTitulosProductos,
  meterBaseImponible,
  meterIva,
  meterTotalFactura,
  meterFormaPago,
  meterObservaciones,
  meterMensajeFinal,
  meterGotaAguaEmpresa,
  meterEstilosProductos,
  meterProductos
}