import api from './../../api/venta-api';
import { requestListadoVentas, successListadoVentas, errorListadoVentas } from "./../../actions/venta/listado-ventas";

export function listadoVentas() {
  return (dispatch, getState) => {
    dispatch(requestListadoVentas());
    return  api.getAllVentas()
      .then( response => response.json() )
      .then( data => dispatch(successListadoVentas(data)) )
      .catch( () => dispatch(errorListadoVentas()) );
  }
};