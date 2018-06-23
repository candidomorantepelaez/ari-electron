import { REQUEST_BORRAR_VENTA, SUCCESS_BORRAR_VENTA, ERROR_BORRAR_VENTA } from "./../../actions/venta/borrar-venta";
import { combineReducers } from 'redux';

const initialState = {
  borrarVenta: {
    ventaParaBorrar: {},
    borrando: false,
    ventaBorrado: {},
  },
};

export function ventaParaBorrar(state=initialState.borrarVenta.ventaParaBorrar, { type, payload }) {
  switch(type){
    case REQUEST_BORRAR_VENTA:
      return state;
    case SUCCESS_BORRAR_VENTA:
      return state;
    case ERROR_BORRAR_VENTA:
      return state;
    default:
      return state;
  }
}

export function borrando(state=initialState.borrarVenta.borrando, { type }) {
  switch(type){
    case REQUEST_BORRAR_VENTA:
      return true;
    case SUCCESS_BORRAR_VENTA:
      return false;
    case ERROR_BORRAR_VENTA:
      return false;
    default:
      return state;
  }
}

export function ventaBorrado(state=initialState.borrarVenta.ventaBorrado, { type, payload }) {
  switch(type){
    case REQUEST_BORRAR_VENTA:
      return state;
    case SUCCESS_BORRAR_VENTA:
      return payload;
    case ERROR_BORRAR_VENTA:
      return state;
    default:
      return state;
  }
}

const getBorrarVentaState = (state) => state.ventas.borrarVenta;

export const getVentaParaBorrar = state => {
  return getBorrarVentaState(state).ventaParaBorrar;
}
export const getBorrando = state => {
  return getBorrarVentaState(state).borrando;
}
export const getVentaBorrado = state => {
  return getBorrarVentaState(state).ventaBorrado;
}

export default combineReducers({
  ventaParaBorrar,
  borrando,
  ventaBorrado,
});
