import api from './../../api/producto-api';
import { requestBuscarProducto, successBuscarProducto, errorBuscarProducto } from "./../../actions/producto/buscar-producto";

export function buscarProducto(id) {
  return (dispatch, getState) => {
    dispatch(requestBuscarProducto());
    return api.getProducto(id)
      .then( response => response.json() )
      .then( data => dispatch(successBuscarProducto(data)) )
      .catch( () => dispatch(errorBuscarProducto()) );
  }
};