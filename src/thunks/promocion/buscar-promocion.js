import api from './../../api/promocion-api';
import { requestBuscarPromocion, successBuscarPromocion, errorBuscarPromocion } from "./../../actions/promocion/buscar-promocion";

export function buscarPromocion(id) {
  return (dispatch, getState) => {
    dispatch(requestBuscarPromocion());
    return api.getPromocion(id)
      .then( response => response.json() )
      .then( data => dispatch(successBuscarPromocion(data)) )
      .catch( () => dispatch(errorBuscarPromocion()) );
  }
};