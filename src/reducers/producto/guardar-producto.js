import { REQUEST_GUARDAR_PRODUCTO, SUCCESS_GUARDAR_PRODUCTO, ERROR_GUARDAR_PRODUCTO } from "./../../actions/producto/guardar-producto";
import { combineReducers } from 'redux';

const initialState = {
  guardarProducto: {
    productoParaGuardar: {},
    guardando: false,
    productoGuardado: {},
  },
};

export function productoParaGuardar(state=initialState.guardarProducto.productoParaGuardar, { type, payload }) {
  switch(type){
    case REQUEST_GUARDAR_PRODUCTO:
      return payload;
    case SUCCESS_GUARDAR_PRODUCTO:
      return state;
    case ERROR_GUARDAR_PRODUCTO:
      return state;
    default:
      return state;
  }
}

export function guardando(state=initialState.guardarProducto.guardando, { type }) {
  switch(type){
    case REQUEST_GUARDAR_PRODUCTO:
      return true;
    case SUCCESS_GUARDAR_PRODUCTO:
      return false;
    case ERROR_GUARDAR_PRODUCTO:
      return false;
    default:
      return state;
  }
}

export function productoGuardado(state=initialState.guardarProducto.productoGuardado, { type, payload }) {
  switch(type){
    case REQUEST_GUARDAR_PRODUCTO:
      return state;
    case SUCCESS_GUARDAR_PRODUCTO:
      return payload;
    case ERROR_GUARDAR_PRODUCTO:
      return state;
    default:
      return state;
  }
}

const getGuardarProductoState = (state) => state.productos.guardarProducto;

export const getProductoParaGuardar = state => getGuardarProductoState(state).productoParaGuardar;
export const getGuardando = state => getGuardarProductoState(state).guardando;
export const getProductoGuardado = state => getGuardarProductoState(state).productoGuardado

export default combineReducers({
  productoParaGuardar,
  guardando,
  productoGuardado
});