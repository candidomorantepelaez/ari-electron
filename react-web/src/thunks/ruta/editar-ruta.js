import api from './../../api/ruta-api';
import { requestEditarRuta, successEditarRuta, errorEditarRuta } from "./../../actions/ruta/editar-ruta";

export function editarRutas(value) {
  return (dispatch, getState) => {
    dispatch(requestEditarRuta(value));
    return  api.updateRuta(value)
      .then( response => response.json() )
      .then( data => dispatch(successEditarRuta(data)) )
      .catch( () => dispatch(errorEditarRuta()) );
  }
};