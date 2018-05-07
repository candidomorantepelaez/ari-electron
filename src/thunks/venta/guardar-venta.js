import api from './../../api/venta-api';
import { requestGuardarVenta, successGuardarVenta, errorGuardarVenta } from "./../../actions/venta/guardar-venta";

export function guardarVentas(value) {
  return (dispatch, getState) => {
    dispatch(requestGuardarVenta(value));
    return  api.saveVenta(value)
      .then( response => response.json() )
      .then( data => dispatch(successGuardarVenta(data)) )
      .catch( () => dispatch(errorGuardarVenta()) );
  }
};