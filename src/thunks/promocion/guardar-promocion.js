import api from './../../api/promocion-api';
import { requestGuardarPromocion, successGuardarPromocion, errorGuardarPromocion } from "./../../actions/promocion/guardar-promocion";

export function guardarPromociones(value) {
  return (dispatch, getState) => {
    dispatch(requestGuardarPromocion(value));
    return  api.savePromocion(value)
      .then( response => response.json() )
      .then( data => dispatch(successGuardarPromocion(data)) )
      .catch( () => dispatch(errorGuardarPromocion()) );
  }
};