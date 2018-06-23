import { REQUEST_BUSCAR_PROMOCION, SUCCESS_BUSCAR_PROMOCION, ERROR_BUSCAR_PROMOCION } from "./../../actions/promocion/buscar-promocion";
import { combineReducers } from 'redux';

const initialState = {
  buscarPromocion: {
    buscandoPromocion: false,
    promocion: {},
  },
};

export function buscandoPromocion(state = initialState.buscarPromocion.buscandoPromocion, { type }) {
  switch(type){
    case REQUEST_BUSCAR_PROMOCION:
      return true;
    case SUCCESS_BUSCAR_PROMOCION:
      return false;
    case ERROR_BUSCAR_PROMOCION:
      return false;
    default:
      return state;
  }
}

export function promocion(state=initialState.buscarPromocion.promocion, { type, payload }) {
  switch(type){
    case REQUEST_BUSCAR_PROMOCION:
      return {};
    case SUCCESS_BUSCAR_PROMOCION:
      return payload;
    case ERROR_BUSCAR_PROMOCION:
      return {};
    default:
      return {};
  }
}

const getBuscarPromocionState = (state) => state.promociones.buscarPromocion;

export const getBuscandoPromocion = state => getBuscarPromocionState(state).buscandoPromocion;
export const getPromocion = state => getBuscarPromocionState(state).promocion;

export default combineReducers({
  buscandoPromocion,
  promocion,
});