import api from './../../api/cliente-api';
import { requestBuscarClienteConRuta, successBuscarClienteConRuta, errorBuscarClienteConRuta } from "./../../actions/cliente/buscar-cliente-con-ruta";

export function buscarClienteConRuta(id) {
  return (dispatch, getState) => {
    dispatch(requestBuscarClienteConRuta());
    return api.getClienteWithRuta(id)
      .then( response => response.json() )
      .then( data => dispatch(successBuscarClienteConRuta(data)) )
      .catch( () => dispatch(errorBuscarClienteConRuta()) );
  }
};