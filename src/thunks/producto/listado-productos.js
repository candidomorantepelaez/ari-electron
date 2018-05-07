import api from './../../api/producto-api';
import { requestListadoProductos, successListadoProductos, errorListadoProductos } from "./../../actions/producto/listado-productos";

export function listadoProductos() {
  return (dispatch, getState) => {
    dispatch(requestListadoProductos());
    return  api.getAllProductos()
      .then( response => response.json() )
      .then( data => dispatch(successListadoProductos(data)) )
      .catch( () => dispatch(errorListadoProductos()) );
  }
};