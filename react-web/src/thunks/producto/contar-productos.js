import api from './../../api/producto-api';
import { requestContarProductos, successContarProductos, errorContarProductos } from "./../../actions/producto/contar-productos";

export function contarProductos() {
  return (dispatch, getState) => {
    dispatch(requestContarProductos());
    return  api.getCountProductos()
      .then( response => response.json() )
      .then( data => dispatch(successContarProductos(data)) )
      .catch( () => dispatch(errorContarProductos()) );
  }
};