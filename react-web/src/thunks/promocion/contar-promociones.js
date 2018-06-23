import api from './../../api/promocion-api';
import { requestContarPromociones, successContarPromociones, errorContarPromociones } from "./../../actions/promocion/contar-promociones";

export function contarPromociones() {
  return (dispatch, getState) => {
    dispatch(requestContarPromociones());
    return  api.getCountPromociones()
      .then( response => response.json() )
      .then( data => dispatch(successContarPromociones(data)) )
      .catch( () => dispatch(errorContarPromociones()) );
  }
};