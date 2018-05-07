import api from './../../api/ruta-api';
import { requestBorrarRuta, successBorrarRuta, errorBorrarRuta } from "./../../actions/ruta/borrar-ruta";

export function borrarRutas(value) {
  return (dispatch, getState) => {
    dispatch(requestBorrarRuta(value));
    return  api.removeRuta(value)
      .then( response => response.json() )
      .then( data => dispatch(successBorrarRuta(data)) )
      .catch( () => dispatch(errorBorrarRuta()) );
  }
};