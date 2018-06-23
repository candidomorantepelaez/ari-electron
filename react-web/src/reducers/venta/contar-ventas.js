import { REQUEST_CONTAR_VENTAS, SUCCESS_CONTAR_VENTAS, ERROR_CONTAR_VENTAS } from "./../../actions/venta/contar-ventas";
import { combineReducers } from 'redux';

const initialState = {
  contarVentas: {
    contandoVentas: false,
    numeroVentas: 0,
  },
};

export function contandoVentas(state = initialState.contarVentas.contandoVentas, { type }) {
  switch(type){
    case REQUEST_CONTAR_VENTAS:
      return true;
    case SUCCESS_CONTAR_VENTAS:
      return false;
    case ERROR_CONTAR_VENTAS:
      return false;
    default:
      return state;
  }
}

export function numeroVentas(state=initialState.contarVentas.numeroVentas, { type, payload }) {
  switch(type){
    case REQUEST_CONTAR_VENTAS:
      return 0;
    case SUCCESS_CONTAR_VENTAS:
      return payload.numeroVentas;
    case ERROR_CONTAR_VENTAS:
      return 0;
    default:
      return state;
  }
}

const getNumeroVentasState = (state) => state.ventas.contarVentas;

export const getContandoVentas = state => getNumeroVentasState(state).contandoVentas;
export const getNumeroVentas = state => getNumeroVentasState(state).numeroVentas;

export default combineReducers({
  contandoVentas,
  numeroVentas,
});