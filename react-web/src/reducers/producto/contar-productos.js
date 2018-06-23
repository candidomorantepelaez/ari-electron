import { REQUEST_CONTAR_PRODUCTOS, SUCCESS_CONTAR_PRODUCTOS, ERROR_CONTAR_PRODUCTOS } from "./../../actions/producto/contar-productos";
import { combineReducers } from 'redux';

const initialState = {
  contarProductos: {
    contandoProductos: false,
    numeroProductos: 0,
  },
};

export function contandoProductos(state = initialState.contarProductos.contandoProductos, { type }) {
  switch(type){
    case REQUEST_CONTAR_PRODUCTOS:
      return true;
    case SUCCESS_CONTAR_PRODUCTOS:
      return false;
    case ERROR_CONTAR_PRODUCTOS:
      return false;
    default:
      return state;
  }
}

export function numeroProductos(state=initialState.contarProductos.numeroProductos, { type, payload }) {
  switch(type){
    case REQUEST_CONTAR_PRODUCTOS:
      return 0;
    case SUCCESS_CONTAR_PRODUCTOS:
      return payload.numeroProductos;
    case ERROR_CONTAR_PRODUCTOS:
      return 0;
    default:
      return state;
  }
}

const getNumeroProductosState = (state) => state.productos.contarProductos;

export const getContandoProductos = state => getNumeroProductosState(state).contandoProductos;
export const getNumeroProductos = state => getNumeroProductosState(state).numeroProductos;

export default combineReducers({
  contandoProductos,
  numeroProductos,
});