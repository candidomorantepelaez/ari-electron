import api from './../../api/producto-api';
import { requestEditarProducto, successEditarProducto, errorEditarProducto } from "./../../actions/producto/editar-producto";

export function editarProductos(value) {
  return (dispatch, getState) => {
    dispatch(requestEditarProducto(value));
    return  api.updateProducto(value)
      .then( response => response.json() )
      .then( data => dispatch(successEditarProducto(data)) )
      .catch( () => dispatch(errorEditarProducto()) );
  }
};