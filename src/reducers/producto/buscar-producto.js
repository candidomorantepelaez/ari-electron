import { REQUEST_BUSCAR_PRODUCTO, SUCCESS_BUSCAR_PRODUCTO, ERROR_BUSCAR_PRODUCTO } from "./../../actions/producto/buscar-producto";
import { combineReducers } from 'redux';

const initialState = {
  buscarProducto: {
    buscandoProducto: false,
    producto: {},
  },
};

export function buscandoProducto(state = initialState.buscarProducto.buscandoProducto, { type }) {
  switch(type){
    case REQUEST_BUSCAR_PRODUCTO:
      return true;
    case SUCCESS_BUSCAR_PRODUCTO:
      return false;
    case ERROR_BUSCAR_PRODUCTO:
      return false;
    default:
      return state;
  }
}

export function producto(state=initialState.buscarProducto.producto, { type, payload }) {
  switch(type){
    case REQUEST_BUSCAR_PRODUCTO:
      return {};
    case SUCCESS_BUSCAR_PRODUCTO:
      return payload;
    case ERROR_BUSCAR_PRODUCTO:
      return {};
    default:
      return {};
  }
}

const getBuscarProductoState = (state) => state.productos.buscarProducto;

export const getBuscandoProducto = state => getBuscarProductoState(state).buscandoProducto;
export const getProducto = state => getBuscarProductoState(state).producto;

export default combineReducers({
  buscandoProducto,
  producto,
});