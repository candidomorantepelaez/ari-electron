let db = require("./conexion-bd");

let configTable = db.getConfigTable();

function save(objeto) {
    return new Promise(function(resolve, reject){
      configTable.insert(objeto, function(err, newDoc){
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
      configTable.update({ _id: objeto._id }, objeto, {}, function(err, numReplaced){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve({ 'configAfectadas': numReplaced });
            }
        });
    });
};

function find(objeto) {
    return new Promise(function(resolve, reject){
      configTable.find(objeto, function(err, docs){
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
      configTable.findOne(objeto, function(err, doc){
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
      configTable.find({}, function(err, docs){
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
      configTable.remove(objeto, {}, function(err, numRemoved){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve({ 'ventasAfectados': numRemoved });
            }
        });
    });
};

function count() {
    return new Promise(function(resolve, reject){
      configTable.count({}, function(err, resultado){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve({ 'numeroConfigs': resultado });
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