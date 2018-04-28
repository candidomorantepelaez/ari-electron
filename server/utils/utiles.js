'use strict';

function mostrarMensajeInicializacion(mensaje){
    console.log('.');
    console.log('..');
    console.log('...');
    console.log('....');
    console.log('.....');
    console.log('......');
    console.log('.......');
    console.log('........');
    console.log(mensaje);
    console.log('........');
    console.log('.......');
    console.log('......');
    console.log('.....');
    console.log('....');
    console.log('...');
    console.log('..');
    console.log('.');
}

function mostrarMensajeError(mensaje){
    console.log('**');
    console.log('***');
    console.log('****');
    console.log('*****');
    console.log('ERROR');
    console.log('________________');
    console.log(mensaje);
    console.log('________________');
}
module.exports = {
    mostrarMensajeInicializacion: mostrarMensajeInicializacion,
    mostrarMensajeError: mostrarMensajeError
}