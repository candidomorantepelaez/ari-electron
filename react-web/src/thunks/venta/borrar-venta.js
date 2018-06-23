import api from './../../api/venta-api';
import { requestBorrarVenta, successBorrarVenta, errorBorrarVenta } from "./../../actions/venta/borrar-venta";

export function borrarVentas(value) {
  return (dispatch, getState) => {
    dispatch(requestBorrarVenta(value));
    return  api.removeVenta(value)
      .then( response => response.json() )
      .then( data => dispatch(successBorrarVenta(data)) )
      .catch( () => dispatch(errorBorrarVenta()) );
  }
};