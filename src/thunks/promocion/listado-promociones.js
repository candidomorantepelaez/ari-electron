import api from './../../api/promocion-api';
import { requestListadoPromociones, successListadoPromociones, errorListadoPromociones } from "./../../actions/promocion/listado-promociones";

export function listadoPromociones() {
  return (dispatch, getState) => {
    dispatch(requestListadoPromociones());
    return  api.getAllPromociones()
      .then( response => response.json() )
      .then( data => dispatch(successListadoPromociones(data)) )
      .catch( () => dispatch(errorListadoPromociones()) );
  }
};