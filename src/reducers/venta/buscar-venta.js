import { REQUEST_BUSCAR_VENTA, SUCCESS_BUSCAR_VENTA, ERROR_BUSCAR_VENTA } from "./../../actions/venta/buscar-venta";
import { combineReducers } from 'redux';

const initialState = {
  buscarVenta: {
    buscandoVenta: false,
    venta: {},
  },
};

export function buscandoVenta(state = initialState.buscarVenta.buscandoVenta, { type }) {
  switch(type){
    case REQUEST_BUSCAR_VENTA:
      return true;
    case SUCCESS_BUSCAR_VENTA:
      return false;
    case ERROR_BUSCAR_VENTA:
      return false;
    default:
      return state;
  }
}

export function venta(state=initialState.buscarVenta.venta, { type, payload }) {
  switch(type){
    case REQUEST_BUSCAR_VENTA:
      return {};
    case SUCCESS_BUSCAR_VENTA:
      return payload;
    case ERROR_BUSCAR_VENTA:
      return {};
    default:
      return {};
  }
}

const getBuscarVentaState = (state) => state.ventas.buscarVenta;

export const getBuscandoVenta = state => getBuscarVentaState(state).buscandoVenta;
export const getVenta = state => getBuscarVentaState(state).venta;

export default combineReducers({
  buscandoVenta,
  venta,
});