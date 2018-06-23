import api from './../../api/cliente-api';
import { requestBuscarCliente, successBuscarCliente, errorBuscarCliente } from "./../../actions/cliente/buscar-cliente";

export function buscarCliente(id) {
  return (dispatch, getState) => {
    dispatch(requestBuscarCliente());
    return api.getCliente(id)
      .then( response => response.json() )
      .then( data => dispatch(successBuscarCliente(data)) )
      .catch( () => dispatch(errorBuscarCliente()) );
  }
};