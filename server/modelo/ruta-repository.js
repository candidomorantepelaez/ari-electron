let db = require("./conexion-bd");

let rutaTable = db.getRutasTable();

function save(objeto) {
    return new Promise(function(resolve, reject){
        rutaTable.insert(objeto, function(err, newDoc){
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
        rutaTable.update(objeto.viejo, objeto.nuevo,{},function(err, numReplaced){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve({ 'rutasAfectadas': numReplaced });
            }
        });
    });
};

function find(objeto) {
    return new Promise(function(resolve, reject){
        rutaTable.find(objeto, function(err, docs){
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
        rutaTable.findOne(objeto, function(err, doc){
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
        rutaTable.find({}, function(err, docs){
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
        rutaTable.remove(objeto, {}, function(err, numRemoved){
            if(err) {
                reject(new Error("error: "+err));
            }else{
                resolve({ 'rutasAfectados': numRemoved });
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