import api from './../../api/promocion-api';
import { requestEditarPromocion, successEditarPromocion, errorEditarPromocion } from "./../../actions/promocion/editar-promocion";

export function editarPromocions(value) {
  return (dispatch, getState) => {
    dispatch(requestEditarPromocion(value));
    return  api.updatePromocion(value)
      .then( response => response.json() )
      .then( data => dispatch(successEditarPromocion(data)) )
      .catch( () => dispatch(errorEditarPromocion()) );
  }
};