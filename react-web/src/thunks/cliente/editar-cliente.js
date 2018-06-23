import api from './../../api/cliente-api';
import { requestEditarCliente, successEditarCliente, errorEditarCliente } from "./../../actions/cliente/editar-cliente";

export function editarClientes(value) {
  return (dispatch, getState) => {
    dispatch(requestEditarCliente(value));
    return  api.updateCliente(value)
      .then( response => response.json() )
      .then( data => dispatch(successEditarCliente(data)) )
      .catch( () => dispatch(errorEditarCliente()) );
  }
};