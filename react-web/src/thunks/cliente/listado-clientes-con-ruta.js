import api from './../../api/cliente-api';
import { requestListadoClientesConRuta, successListadoClientesConRuta, errorListadoClientesConRuta } from "./../../actions/cliente/listado-clientes-con-ruta";

export function listadoClientesConRuta() {
  return (dispatch, getState) => {
    dispatch(requestListadoClientesConRuta());
    return  api.getAllClientesWithRuta()
      .then( response => response.json() )
      .then( data => dispatch(successListadoClientesConRuta(data)) )
      .catch( () => dispatch(errorListadoClientesConRuta()) );
  }
};