import { REQUEST_EDITAR_VENTA, SUCCESS_EDITAR_VENTA, ERROR_EDITAR_VENTA } from "./../../actions/venta/editar-venta";
import { combineReducers } from 'redux';

const initialState = {
  editarVenta: {
    ventaParaEditar: {},
    editando: false,
    ventaEditado: {},
  },
};

export function ventaParaEditar(state=initialState.editarVenta.ventaParaEditar, { type, payload }) {
  switch(type){
    case REQUEST_EDITAR_VENTA:
      return payload;
    case SUCCESS_EDITAR_VENTA:
      return state;
    case ERROR_EDITAR_VENTA:
      return state;
    default:
      return state;
  }
}

export function editando(state=initialState.editarVenta.editando, { type }) {
  switch(type){
    case REQUEST_EDITAR_VENTA:
      return true;
    case SUCCESS_EDITAR_VENTA:
      return false;
    case ERROR_EDITAR_VENTA:
      return false;
    default:
      return state;
  }
}

export function ventaEditado(state=initialState.editarVenta.ventaEditado, { type, payload }) {
  switch(type){
    case REQUEST_EDITAR_VENTA:
      return state;
    case SUCCESS_EDITAR_VENTA:
      return payload;
    case ERROR_EDITAR_VENTA:
      return state;
    default:
      return state;
  }
}

const getEditarVentaState = (state) => state.editarVenta;

export const getVentaParaEditar = state => getEditarVentaState(state).ventaParaEditar;
export const getEditando = state => getEditarVentaState(state).editando;
export const getVentaEditado = state => getEditarVentaState(state).ventaEditado;

export default combineReducers({
  ventaParaEditar,
  editando,
  ventaEditado,
});
