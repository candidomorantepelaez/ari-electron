import api from './../../api/cliente-api';
import { requestContarClientes, successContarClientes, errorContarClientes } from "./../../actions/cliente/contar-clientes";

export function contarClientes() {
  return (dispatch, getState) => {
    dispatch(requestContarClientes());
    return api.getCountClientes()
      .then( response => response.json() )
      .then( data => dispatch(successContarClientes(data)) )
      .catch( () => dispatch(errorContarClientes()) );
  }
};