import { REQUEST_LISTADO_PRODUCTOS, SUCCESS_LISTADO_PRODUCTOS, ERROR_LISTADO_PRODUCTOS } from "./../../actions/producto/listado-productos";
import { combineReducers } from 'redux';

const initialState = {
  listadoProductos: {
    buscandoProductos: false,
    listadoProductos: [],
  },
};

export function buscandoProductos(state = initialState.listadoProductos.buscandoProductos, { type }) {
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

export function listadoProductos(state=initialState.listadoProductos.listadoProductos, { type, payload }) {
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

export const getBuscandoProductos = state => getListadoProductosState(state).buscandoProductos;
export const getListadoProductos = state => getListadoProductosState(state).listadoProductos;

export default combineReducers({
  buscandoProductos,
  listadoProductos,
});