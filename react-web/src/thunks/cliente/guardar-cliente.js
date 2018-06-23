import api from './../../api/cliente-api';
import { requestGuardarCliente, successGuardarCliente, errorGuardarCliente } from "./../../actions/cliente/guardar-cliente";

export function guardarClientes(value) {
  return (dispatch, getState) => {
    dispatch(requestGuardarCliente(value));
    return  api.saveCliente(value)
      .then( response => response.json() )
      .then( data => dispatch(successGuardarCliente(data)) )
      .catch( () => dispatch(errorGuardarCliente()) );
  }
};