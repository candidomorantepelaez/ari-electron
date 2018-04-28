const utiles = require('./../utils/utiles');

var Datastore = require('./../../node_modules/nedb');
console.log(Datastore);
var db = {};
db.clientes =  new  Datastore ({
            filename:  './db/clientes.json', 
            timestampData: true 
        });
console.log(db.clientes);
db.clientes.loadDatabase ( function ( err ) {   
   if(err) { utiles.mostrarMensajeInicializacion('error al cargar clientes.db: '+err); };
   utiles.mostrarMensajeInicializacion('cargada clientes.db');
});


getDb = () => db;

getClientesTable = () => db.clientes;   

module.exports = {
    getDb,
    getClientesTable
};