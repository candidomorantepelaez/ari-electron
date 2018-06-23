import api from './../../api/ruta-api';
import { requestContarRutas, successContarRutas, errorContarRutas } from "./../../actions/ruta/contar-rutas";

export function contarRutas() {
  return (dispatch, getState) => {
    dispatch(requestContarRutas());
    return  api.getCountRutas()
      .then( response => response.json() )
      .then( data => dispatch(successContarRutas(data)) )
      .catch( () => dispatch(errorContarRutas()) );
  }
};