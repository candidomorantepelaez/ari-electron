import api from './../../api/promocion-api';
import { requestListadoPromocions, successListadoPromocions, errorListadoPromocions } from "./../../actions/promocion/listado-promocions";

export function listadoPromocions() {
  return (dispatch, getState) => {
    dispatch(requestListadoPromocions());
    return  api.getAllPromocions()
      .then( response => response.json() )
      .then( data => dispatch(successListadoPromocions(data)) )
      .catch( () => dispatch(errorListadoPromocions()) );
  }
};