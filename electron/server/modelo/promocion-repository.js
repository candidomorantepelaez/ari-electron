let db = require("./conexion-bd");

let promocionTable = db.getPromocionesTable();

function save(objeto) {
    return new Promise(function(resolve, reject){
        promocionTable.insert(objeto, function(err, newDoc){
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
        promocionTable.update(objeto.viejo, objeto.nuevo,{},function(err, numReplaced){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve({ 'promocionesAfectadas': numReplaced });
            }
        });
    });
};

function find(objeto) {
    return new Promise(function(resolve, reject){
        promocionTable.find(objeto, function(err, docs){
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
        promocionTable.findOne(objeto, function(err, doc){
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
        promocionTable.find({}, function(err, docs){
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
        promocionTable.remove(objeto, {}, function(err, numRemoved){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve({ 'promocionesAfectadas': numRemoved });
            }
        });
    });
};

function count() {
    return new Promise(function(resolve, reject){
        promocionTable.count({}, function(err, resultado){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve({ 'numeroPromociones': resultado });
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
    remove,
    count
};