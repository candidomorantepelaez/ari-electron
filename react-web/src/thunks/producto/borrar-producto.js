import api from './../../api/producto-api';
import { requestBorrarProducto, successBorrarProducto, errorBorrarProducto } from "./../../actions/producto/borrar-producto";

export function borrarProductos(value) {
  return (dispatch, getState) => {
    dispatch(requestBorrarProducto(value));
    return  api.removeProducto(value)
      .then( response => response.json() )
      .then( data => dispatch(successBorrarProducto(data)) )
      .catch( () => dispatch(errorBorrarProducto()) );
  }
};