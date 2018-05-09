import { REQUEST_BORRAR_PRODUCTO, SUCCESS_BORRAR_PRODUCTO, ERROR_BORRAR_PRODUCTO } from "./../../actions/producto/borrar-producto";
import { combineReducers } from 'redux';

const initialState = {
  borrarProducto: {
    productoParaBorrar: {},
    borrando: false,
    productoBorrado: {},
  },
};

export function productoParaBorrar(state=initialState.borrarProducto.productoParaBorrar, { type, payload }) {
  switch(type){
    case REQUEST_BORRAR_PRODUCTO:
      return state;
    case SUCCESS_BORRAR_PRODUCTO:
      return state;
    case ERROR_BORRAR_PRODUCTO:
      return state;
    default:
      return state;
  }
}

export function borrando(state=initialState.borrarProducto.borrando, { type }) {
  switch(type){
    case REQUEST_BORRAR_PRODUCTO:
      return true;
    case SUCCESS_BORRAR_PRODUCTO:
      return false;
    case ERROR_BORRAR_PRODUCTO:
      return false;
    default:
      return state;
  }
}

export function productoBorrado(state=initialState.borrarProducto.productoBorrado, { type, payload }) {
  switch(type){
    case REQUEST_BORRAR_PRODUCTO:
      return state;
    case SUCCESS_BORRAR_PRODUCTO:
      return payload;
    case ERROR_BORRAR_PRODUCTO:
      return state;
    default:
      return state;
  }
}

const getBorrarProductoState = (state) => state.productos.borrarProducto;

export const getProductoParaBorrar = state => {
  return getBorrarProductoState(state).productoParaBorrar;
}
export const getBorrando = state => {
  return getBorrarProductoState(state).borrando;
}
export const getProductoBorrado = state => {
  return getBorrarProductoState(state).productoBorrado;
}

export default combineReducers({
  productoParaBorrar,
  borrando,
  productoBorrado,
});
