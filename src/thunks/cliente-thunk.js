import api from './../api/cliente-api';
import { requestListadoClientes,
  successListadoClientes,
  errorListadoClientes,
  requestBuscarCliente,
  successBuscarCliente,
  errorBuscarCliente,
  requestGuardarClientes,
  successGuardarClientes,
  errorGuardarClientes,
  requestEditarClientes,
  successEditarClientes,
  errorEditarClientes,
  requestBorrarClientes,
  successBorrarClientes,
  errorBorrarClientes } from './../actions/cliente-actions';

export function listadoClientes() {
  return (dispatch, getState) => {
    dispatch(requestListadoClientes());
    return  api.getAllClientes()
      .then( response => response.json() )
      .then( data => dispatch(successListadoClientes(data)) )
      .catch( () => dispatch(errorListadoClientes()) );
  }
};

export function buscarCliente(id) {
  return (dispatch, getState) => {
    dispatch(requestBuscarCliente());
    return  api.getCliente(id)
      .then( response => response.json() )
      .then( data => dispatch(successBuscarCliente(data)) )
      .catch( () => dispatch(errorBuscarCliente()) );
  }
};

export function guardarClientes(value) {
  return (dispatch, getState) => {
    dispatch(requestGuardarClientes(value));
    return  api.saveCliente(value)
      .then( response => response.json() )
      .then( data => dispatch(successGuardarClientes(data)) )
      .catch( () => dispatch(errorGuardarClientes()) );
  }
};

export function editarClientes(value) {
  return (dispatch, getState) => {
    dispatch(requestEditarClientes(value));
    return  api.updateCliente(value)
      .then( response => response.json() )
      .then( data => dispatch(successEditarClientes(data)) )
      .catch( () => dispatch(errorEditarClientes()) );
  }
};

export function borrarClientes(value) {
  return (dispatch, getState) => {
    dispatch(requestBorrarClientes(value));
    return  api.removeCliente(value)
      .then( response => response.json() )
      .then( data => dispatch(successBorrarClientes(data)) )
      .catch( () => dispatch(errorBorrarClientes()) );
  }
};


