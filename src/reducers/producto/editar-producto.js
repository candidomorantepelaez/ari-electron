import { REQUEST_EDITAR_PRODUCTO, SUCCESS_EDITAR_PRODUCTO, ERROR_EDITAR_PRODUCTO } from "./../../actions/producto/editar-producto";
import { combineReducers } from 'redux';

const initialState = {
  editarProducto: {
    productoParaEditar: {},
    editando: false,
    productoEditado: {},
  },
};

export function productoParaEditar(state=initialState.editarProducto.productoParaEditar, { type, payload }) {
  switch(type){
    case REQUEST_EDITAR_PRODUCTO:
      return payload;
    case SUCCESS_EDITAR_PRODUCTO:
      return state;
    case ERROR_EDITAR_PRODUCTO:
      return state;
    default:
      return state;
  }
}

export function editando(state=initialState.editarProducto.editando, { type }) {
  switch(type){
    case REQUEST_EDITAR_PRODUCTO:
      return true;
    case SUCCESS_EDITAR_PRODUCTO:
      return false;
    case ERROR_EDITAR_PRODUCTO:
      return false;
    default:
      return state;
  }
}

export function productoEditado(state=initialState.editarProducto.productoEditado, { type, payload }) {
  switch(type){
    case REQUEST_EDITAR_PRODUCTO:
      return state;
    case SUCCESS_EDITAR_PRODUCTO:
      return payload;
    case ERROR_EDITAR_PRODUCTO:
      return state;
    default:
      return state;
  }
}

const getEditarProductoState = (state) => state.editarProducto;

export const getProductoParaEditar = state => getEditarProductoState(state).productoParaEditar;
export const getEditando = state => getEditarProductoState(state).editando;
export const getProductoEditado = state => getEditarProductoState(state).productoEditado;

export default combineReducers({
  productoParaEditar,
  editando,
  productoEditado,
});
