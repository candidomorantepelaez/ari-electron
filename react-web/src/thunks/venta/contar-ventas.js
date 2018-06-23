import api from './../../api/venta-api';
import { requestContarVentas, successContarVentas, errorContarVentas } from "./../../actions/venta/contar-ventas";

export function contarVentas() {
  return (dispatch, getState) => {
    dispatch(requestContarVentas());
    return  api.getCountVentas()
      .then( response => response.json() )
      .then( data => dispatch(successContarVentas(data)) )
      .catch( () => dispatch(errorContarVentas()) );
  }
};