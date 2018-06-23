import api from './../../api/promocion-api';
import { requestBorrarPromocion, successBorrarPromocion, errorBorrarPromocion } from "./../../actions/promocion/borrar-promocion";

export function borrarPromociones(value) {
  return (dispatch, getState) => {
    dispatch(requestBorrarPromocion(value));
    return  api.removePromocion(value)
      .then( response => response.json() )
      .then( data => dispatch(successBorrarPromocion(data)) )
      .catch( () => dispatch(errorBorrarPromocion()) );
  }
};