import { REQUEST_CONTAR_PROMOCIONES, SUCCESS_CONTAR_PROMOCIONES, ERROR_CONTAR_PROMOCIONES } from "./../../actions/promocion/contar-promociones";
import { combineReducers } from 'redux';

const initialState = {
  contarPromociones: {
    contandoPromociones: false,
    numeroPromociones: 0,
  },
};

export function contandoPromociones(state = initialState.contarPromociones.contandoPromociones, { type }) {
  switch(type){
    case REQUEST_CONTAR_PROMOCIONES:
      return true;
    case SUCCESS_CONTAR_PROMOCIONES:
      return false;
    case ERROR_CONTAR_PROMOCIONES:
      return false;
    default:
      return state;
  }
}

export function numeroPromociones(state=initialState.contarPromociones.numeroPromociones, { type, payload }) {
  switch(type){
    case REQUEST_CONTAR_PROMOCIONES:
      return 0;
    case SUCCESS_CONTAR_PROMOCIONES:
      return payload.numeroPromociones;
    case ERROR_CONTAR_PROMOCIONES:
      return 0;
    default:
      return state;
  }
}

const getNumeroPromocionesState = (state) => state.promociones.contarPromociones;

export const getContandoPromociones = state => getNumeroPromocionesState(state).contandoPromociones;
export const getNumeroPromociones = state => getNumeroPromocionesState(state).numeroPromociones;

export default combineReducers({
  contandoPromociones,
  numeroPromociones,
});