import api from './../../api/cliente-api';
import { requestListadoClientes, successListadoClientes, errorListadoClientes } from "./../../actions/cliente/listado-clientes";

export function listadoClientes() {
  return (dispatch, getState) => {
    dispatch(requestListadoClientes());
    return  api.getAllClientes()
      .then( response => response.json() )
      .then( data => dispatch(successListadoClientes(data)) )
      .catch( () => dispatch(errorListadoClientes()) );
  }
};