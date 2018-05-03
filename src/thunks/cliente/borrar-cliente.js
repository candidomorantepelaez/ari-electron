import api from './../../api/cliente-api';
import { requestBorrarCliente, successBorrarCliente, errorBorrarCliente } from "./../../actions/cliente/borrar-cliente";

export function borrarClientes(value) {
  return (dispatch, getState) => {
    dispatch(requestBorrarCliente(value));
    return  api.removeCliente(value)
      .then( response => response.json() )
      .then( data => dispatch(successBorrarCliente(data)) )
      .catch( () => dispatch(errorBorrarCliente()) );
  }
};


