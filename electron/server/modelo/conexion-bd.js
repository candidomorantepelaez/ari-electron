const utiles = require('./../utils/utiles');
var Datastore = require('./../../node_modules/nedb');
const rutaDb = "/.ariDb"
var db = {};
/*clientes table*/
db.clientes = new Datastore ({
            filename: rutaDb+'/clientes.json',
            timestampData: true
        });
db.clientes.loadDatabase ( function ( err ) {
   if(err) { utiles.mostrarMensajeInicializacion('error al cargar clientes.db: '+err); };
   utiles.mostrarMensajeInicializacion('cargada clientes.db');
});
/*rutas table*/
db.rutas = new Datastore ({
    filename: rutaDb+'/rutas.json',
    timestampData: true
});
db.rutas.loadDatabase ( function ( err ) {
if(err) { utiles.mostrarMensajeInicializacion('error al cargar rutas.db: '+err); };
utiles.mostrarMensajeInicializacion('cargada rutas.db');
});
/*productos table*/
db.productos = new Datastore ({
    filename: rutaDb+'/productos.json',
    timestampData: true
});
db.productos.loadDatabase ( function ( err ) {
if(err) { utiles.mostrarMensajeInicializacion('error al cargar productos.db: '+err); };
utiles.mostrarMensajeInicializacion('cargada productos.db');
});
/*promociones table*/
db.promociones = new Datastore ({
    filename: rutaDb+'/promociones.json',
    timestampData: true
});
db.promociones.loadDatabase ( function ( err ) {
if(err) { utiles.mostrarMensajeInicializacion('error al cargar promociones.db: '+err); };
utiles.mostrarMensajeInicializacion('cargada promocones.db');
});
/*ventas table*/
db.ventas = new Datastore ({
    filename: rutaDb+'/ventas.json',
    timestampData: true
});
db.ventas.loadDatabase ( function ( err ) {
if(err) { utiles.mostrarMensajeInicializacion('error al cargar ventas.db: '+err); };
utiles.mostrarMensajeInicializacion('cargada ventas.db');
});
/*config table*/
db.config = new Datastore ({
    filename: rutaDb+'/config.json',
    timestampData: true
});
db.config.loadDatabase ( function ( err ) {
if(err) { utiles.mostrarMensajeInicializacion('error al cargar config.db: '+err); };
utiles.mostrarMensajeInicializacion('cargada config.db');
});

const getDb = () => db;
const getClientesTable = () => db.clientes;
const getRutasTable = () => db.rutas;
const getProductosTable = () => db.productos;
const getPromocionesTable = () => db.promociones;
const getVentasTable = () => db.ventas;
const getConfigTable = () => db.config;

module.exports = {
    getDb,
    getClientesTable,
    getRutasTable,
    getProductosTable,
    getPromocionesTable,
    getVentasTable,
    getConfigTable
};