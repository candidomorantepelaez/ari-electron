import api from './../../api/producto-api';
import { requestGuardarProducto, successGuardarProducto, errorGuardarProducto } from "./../../actions/producto/guardar-producto";

export function guardarProductos(value) {
  return (dispatch, getState) => {
    dispatch(requestGuardarProducto(value));
    return  api.saveProducto(value)
      .then( response => response.json() )
      .then( data => dispatch(successGuardarProducto(data)) )
      .catch( () => dispatch(errorGuardarProducto()) );
  }
};