import { REQUEST_BORRAR_PROMOCION, SUCCESS_BORRAR_PROMOCION, ERROR_BORRAR_PROMOCION } from "./../../actions/promocion/borrar-promocion";
import { combineReducers } from 'redux';

const initialState = {
  borrarPromocion: {
    promocionParaBorrar: {},
    borrando: false,
    promocionBorrado: {},
  },
};

export function promocionParaBorrar(state=initialState.borrarPromocion.promocionParaBorrar, { type, payload }) {
  switch(type){
    case REQUEST_BORRAR_PROMOCION:
      return state;
    case SUCCESS_BORRAR_PROMOCION:
      return state;
    case ERROR_BORRAR_PROMOCION:
      return state;
    default:
      return state;
  }
}

export function borrando(state=initialState.borrarPromocion.borrando, { type }) {
  switch(type){
    case REQUEST_BORRAR_PROMOCION:
      return true;
    case SUCCESS_BORRAR_PROMOCION:
      return false;
    case ERROR_BORRAR_PROMOCION:
      return false;
    default:
      return state;
  }
}

export function promocionBorrado(state=initialState.borrarPromocion.promocionBorrado, { type, payload }) {
  switch(type){
    case REQUEST_BORRAR_PROMOCION:
      return state;
    case SUCCESS_BORRAR_PROMOCION:
      return payload;
    case ERROR_BORRAR_PROMOCION:
      return state;
    default:
      return state;
  }
}

const getBorrarPromocionState = (state) => state.promocions.borrarPromocion;

export const getPromocionParaBorrar = state => {
  return getBorrarPromocionState(state).promocionParaBorrar;
}
export const getBorrando = state => {
  return getBorrarPromocionState(state).borrando;
}
export const getPromocionBorrado = state => {
  return getBorrarPromocionState(state).promocionBorrado;
}

export default combineReducers({
  promocionParaBorrar,
  borrando,
  promocionBorrado,
});
