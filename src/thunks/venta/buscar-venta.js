import api from './../../api/venta-api';
import { requestBuscarVenta, successBuscarVenta, errorBuscarVenta } from "./../../actions/venta/buscar-venta";

export function buscarVenta(id) {
  return (dispatch, getState) => {
    dispatch(requestBuscarVenta());
    return api.getVenta(id)
      .then( response => response.json() )
      .then( data => dispatch(successBuscarVenta(data)) )
      .catch( () => dispatch(errorBuscarVenta()) );
  }
};