let db = require("./conexion-bd");

let clienteTable = db.getClientesTable();

function save(cliente) {

    return new Promise(function(resolve, reject){
        clienteTable.insert(cliente, function(err, newDoc){
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
        clienteTable.update({ _id: objeto._id }, objeto, {}, function(err, numReplaced){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve({ 'clientesAfectados': numReplaced });
            }
        });
    });
};

function find(objeto) {
    return new Promise(function(resolve, reject){
        clienteTable.find(objeto, function(err, docs){
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
        clienteTable.findOne(objeto, function(err, doc){
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
        clienteTable.find({}, function(err, docs){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve( docs );
            }
        });
    });
};

function remove(cliente) {
    return new Promise(function(resolve, reject){
        clienteTable.remove(cliente, {}, function(err, numRemoved){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve({ 'clientesAfectados': numRemoved });
            }
        });
    });
};

function count() {
    return new Promise(function(resolve, reject){
        clienteTable.count({}, function(err, resultado){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve({ 'numeroClientes': resultado });
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