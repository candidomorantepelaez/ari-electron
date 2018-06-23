import api from './../../api/ruta-api';
import { requestGuardarRuta, successGuardarRuta, errorGuardarRuta } from "./../../actions/ruta/guardar-ruta";

export function guardarRutas(value) {
  return (dispatch, getState) => {
    dispatch(requestGuardarRuta(value));
    return  api.saveRuta(value)
      .then( response => response.json() )
      .then( data => dispatch(successGuardarRuta(data)) )
      .catch( () => dispatch(errorGuardarRuta()) );
  }
};