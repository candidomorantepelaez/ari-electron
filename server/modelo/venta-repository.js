let db = require("./conexion-bd");

let ventaTable = db.getVentasTable();

function save(objeto) {
    return new Promise(function(resolve, reject){
        ventaTable.insert(objeto, function(err, newDoc){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve( newDoc );
            }
        });
    });

};

function update(objeto) {
    return new Promise(function(resolve, reject){
        ventaTable.update(objeto.viejo, objeto.nuevo,{},function(err, numReplaced){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve({ 'ventasAfectadas': numReplaced });
            }
        });
    });
};

function find(objeto) {
    return new Promise(function(resolve, reject){
        ventaTable.find(objeto, function(err, docs){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve( docs );
            }
        });
    });
};

function findOne(objeto) {
    return new Promise(function(resolve, reject){
        ventaTable.findOne(objeto, function(err, doc){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve( doc );
            }
        });
    });
};

function list() {
    return new Promise(function(resolve, reject){
        ventaTable.find({}, function(err, docs){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve( docs );
            }
        });
    });
};

function remove(objeto) {
    return new Promise(function(resolve, reject){
        ventaTable.remove(objeto, {}, function(err, numRemoved){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve({ 'ventasAfectados': numRemoved });
            }
        });
    });
};

module.exports = {
    save,
    update,
    find,
    findOne,
    list,
    remove
};