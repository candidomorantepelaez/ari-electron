import { REQUEST_LISTADO_PRODUCTOS, SUCCESS_LISTADO_PRODUCTOS, ERROR_LISTADO_PRODUCTOS } from "./../../actions/producto/listado-productos";
import { combineReducers } from 'redux';

const initialState = {
  listadoProductos: {
    buscando: false,
    resultado: [],
  },
};

export function buscando(state = initialState.listadoProductos.buscando, { type }) {
  switch(type){
    case REQUEST_LISTADO_PRODUCTOS:
      return true;
    case SUCCESS_LISTADO_PRODUCTOS:
      return false;
    case ERROR_LISTADO_PRODUCTOS:
      return false;
    default:
      return state;
  }
}

export function resultado(state=initialState.listadoProductos.resultado, { type, payload }) {
  switch(type){
    case REQUEST_LISTADO_PRODUCTOS:
      return [];
    case SUCCESS_LISTADO_PRODUCTOS:
      return payload;
    case ERROR_LISTADO_PRODUCTOS:
      return [];
    default:
      return state;
  }
}

const getListadoProductosState = (state) => state.productos.listadoProductos;

export const getBuscando = state => getListadoProductosState(state).buscando;
export const getResultado = state => getListadoProductosState(state).resultado;

export default combineReducers({
  buscando,
  resultado,
});