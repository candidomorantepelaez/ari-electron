import { REQUEST_LISTADO_VENTAS, SUCCESS_LISTADO_VENTAS, ERROR_LISTADO_VENTAS } from "./../../actions/venta/listado-ventas";
import { combineReducers } from 'redux';

const initialState = {
  listadoVentas: {
    buscando: false,
    resultado: [],
  },
};

export function buscando(state = initialState.listadoVentas.buscando, { type }) {
  switch(type){
    case REQUEST_LISTADO_VENTAS:
      return true;
    case SUCCESS_LISTADO_VENTAS:
      return false;
    case ERROR_LISTADO_VENTAS:
      return false;
    default:
      return state;
  }
}

export function resultado(state=initialState.listadoVentas.resultado, { type, payload }) {
  switch(type){
    case REQUEST_LISTADO_VENTAS:
      return [];
    case SUCCESS_LISTADO_VENTAS:
      return payload;
    case ERROR_LISTADO_VENTAS:
      return [];
    default:
      return state;
  }
}

const getListadoVentasState = (state) => state.ventas.listadoVentas;

export const getBuscando = state => getListadoVentasState(state).buscando;
export const getResultado = state => getListadoVentasState(state).resultado;

export default combineReducers({
  buscando,
  resultado,
});