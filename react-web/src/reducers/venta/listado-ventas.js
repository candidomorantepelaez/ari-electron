import { REQUEST_LISTADO_VENTAS, SUCCESS_LISTADO_VENTAS, ERROR_LISTADO_VENTAS } from "./../../actions/venta/listado-ventas";
import { combineReducers } from 'redux';

const initialState = {
  listadoVentas: {
    buscandoVentas: false,
    listadoVentas: [],
  },
};

export function buscandoVentas(state = initialState.listadoVentas.buscandoVentas, { type }) {
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

export function listadoVentas(state=initialState.listadoVentas.listadoVentas, { type, payload }) {
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

export const getBuscandoVentas = state => getListadoVentasState(state).buscandoVentas;
export const getListadoVentas = state => getListadoVentasState(state).listadoVentas;

export default combineReducers({
  buscandoVentas,
  listadoVentas,
});