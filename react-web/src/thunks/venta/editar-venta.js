import api from './../../api/venta-api';
import { requestEditarVenta, successEditarVenta, errorEditarVenta } from "./../../actions/venta/editar-venta";

export function editarVentas(value) {
  return (dispatch, getState) => {
    dispatch(requestEditarVenta(value));
    return  api.updateVenta(value)
      .then( response => response.json() )
      .then( data => dispatch(successEditarVenta(data)) )
      .catch( () => dispatch(errorEditarVenta()) );
  }
};