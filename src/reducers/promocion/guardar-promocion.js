import { REQUEST_GUARDAR_PROMOCION, SUCCESS_GUARDAR_PROMOCION, ERROR_GUARDAR_PROMOCION } from "./../../actions/promocion/guardar-promocion";
import { combineReducers } from 'redux';

const initialState = {
  guardarPromocion: {
    promocionParaGuardar: {},
    guardando: false,
    promocionGuardado: {},
  },
};

export function promocionParaGuardar(state=initialState.guardarPromocion.promocionParaGuardar, { type, payload }) {
  switch(type){
    case REQUEST_GUARDAR_PROMOCION:
      return payload;
    case SUCCESS_GUARDAR_PROMOCION:
      return state;
    case ERROR_GUARDAR_PROMOCION:
      return state;
    default:
      return state;
  }
}

export function guardando(state=initialState.guardarPromocion.guardando, { type }) {
  switch(type){
    case REQUEST_GUARDAR_PROMOCION:
      return true;
    case SUCCESS_GUARDAR_PROMOCION:
      return false;
    case ERROR_GUARDAR_PROMOCION:
      return false;
    default:
      return state;
  }
}

export function promocionGuardado(state=initialState.guardarPromocion.promocionGuardado, { type, payload }) {
  switch(type){
    case REQUEST_GUARDAR_PROMOCION:
      return state;
    case SUCCESS_GUARDAR_PROMOCION:
      return payload;
    case ERROR_GUARDAR_PROMOCION:
      return state;
    default:
      return state;
  }
}

const getGuardarPromocionState = (state) => state.promocions.guardarPromocion;

export const getPromocionParaGuardar = state => getGuardarPromocionState(state).promocionParaGuardar;
export const getGuardando = state => getGuardarPromocionState(state).guardando;
export const getPromocionGuardado = state => getGuardarPromocionState(state).promocionGuardado

export default combineReducers({
  promocionParaGuardar,
  guardando,
  promocionGuardado
});