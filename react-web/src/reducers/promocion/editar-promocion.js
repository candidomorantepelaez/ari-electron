import { REQUEST_EDITAR_PROMOCION, SUCCESS_EDITAR_PROMOCION, ERROR_EDITAR_PROMOCION } from "./../../actions/promocion/editar-promocion";
import { combineReducers } from 'redux';

const initialState = {
  editarPromocion: {
    promocionParaEditar: {},
    editando: false,
    promocionEditado: {},
  },
};

export function promocionParaEditar(state=initialState.editarPromocion.promocionParaEditar, { type, payload }) {
  switch(type){
    case REQUEST_EDITAR_PROMOCION:
      return payload;
    case SUCCESS_EDITAR_PROMOCION:
      return state;
    case ERROR_EDITAR_PROMOCION:
      return state;
    default:
      return state;
  }
}

export function editando(state=initialState.editarPromocion.editando, { type }) {
  switch(type){
    case REQUEST_EDITAR_PROMOCION:
      return true;
    case SUCCESS_EDITAR_PROMOCION:
      return false;
    case ERROR_EDITAR_PROMOCION:
      return false;
    default:
      return state;
  }
}

export function promocionEditado(state=initialState.editarPromocion.promocionEditado, { type, payload }) {
  switch(type){
    case REQUEST_EDITAR_PROMOCION:
      return state;
    case SUCCESS_EDITAR_PROMOCION:
      return payload;
    case ERROR_EDITAR_PROMOCION:
      return state;
    default:
      return state;
  }
}

const getEditarPromocionState = (state) => state.editarPromocion;

export const getPromocionParaEditar = state => getEditarPromocionState(state).promocionParaEditar;
export const getEditando = state => getEditarPromocionState(state).editando;
export const getPromocionEditado = state => getEditarPromocionState(state).promocionEditado;

export default combineReducers({
  promocionParaEditar,
  editando,
  promocionEditado,
});
