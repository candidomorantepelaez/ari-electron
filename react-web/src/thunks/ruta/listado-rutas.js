import api from './../../api/ruta-api';
import { requestListadoRutas, successListadoRutas, errorListadoRutas } from "./../../actions/ruta/listado-rutas";

export function listadoRutas() {
  return (dispatch, getState) => {
    dispatch(requestListadoRutas());
    return  api.getAllRutas()
      .then( response => response.json() )
      .then( data => dispatch(successListadoRutas(data)) )
      .catch( () => dispatch(errorListadoRutas()) );
  }
};