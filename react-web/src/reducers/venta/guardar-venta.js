import { REQUEST_GUARDAR_VENTA, SUCCESS_GUARDAR_VENTA, ERROR_GUARDAR_VENTA } from "./../../actions/venta/guardar-venta";
import { combineReducers } from 'redux';

const initialState = {
  guardarVenta: {
    ventaParaGuardar: {},
    guardando: false,
    ventaGuardado: {},
  },
};

export function ventaParaGuardar(state=initialState.guardarVenta.ventaParaGuardar, { type, payload }) {
  switch(type){
    case REQUEST_GUARDAR_VENTA:
      return payload;
    case SUCCESS_GUARDAR_VENTA:
      return state;
    case ERROR_GUARDAR_VENTA:
      return state;
    default:
      return state;
  }
}

export function guardando(state=initialState.guardarVenta.guardando, { type }) {
  switch(type){
    case REQUEST_GUARDAR_VENTA:
      return true;
    case SUCCESS_GUARDAR_VENTA:
      return false;
    case ERROR_GUARDAR_VENTA:
      return false;
    default:
      return state;
  }
}

export function ventaGuardado(state=initialState.guardarVenta.ventaGuardado, { type, payload }) {
  switch(type){
    case REQUEST_GUARDAR_VENTA:
      return state;
    case SUCCESS_GUARDAR_VENTA:
      return payload;
    case ERROR_GUARDAR_VENTA:
      return state;
    default:
      return state;
  }
}

const getGuardarVentaState = (state) => state.ventas.guardarVenta;

export const getVentaParaGuardar = state => getGuardarVentaState(state).ventaParaGuardar;
export const getGuardando = state => getGuardarVentaState(state).guardando;
export const getVentaGuardado = state => getGuardarVentaState(state).ventaGuardado

export default combineReducers({
  ventaParaGuardar,
  guardando,
  ventaGuardado
});