import api from './../../api/ruta-api';
import { requestBuscarRuta, successBuscarRuta, errorBuscarRuta } from "./../../actions/ruta/buscar-ruta";

export function buscarRuta(id) {
  return (dispatch, getState) => {
    dispatch(requestBuscarRuta());
    return api.getRuta(id)
      .then( response => response.json() )
      .then( data => dispatch(successBuscarRuta(data)) )
      .catch( () => dispatch(errorBuscarRuta()) );
  }
};