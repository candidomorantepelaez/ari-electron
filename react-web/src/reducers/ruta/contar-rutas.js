import { REQUEST_CONTAR_RUTAS, SUCCESS_CONTAR_RUTAS, ERROR_CONTAR_RUTAS } from "./../../actions/ruta/contar-rutas";
import { combineReducers } from 'redux';

const initialState = {
  contarRutas: {
    contandoRutas: false,
    numeroRutas: 0,
  },
};

export function contandoRutas(state = initialState.contarRutas.contandoRutas, { type }) {
  switch(type){
    case REQUEST_CONTAR_RUTAS:
      return true;
    case SUCCESS_CONTAR_RUTAS:
      return false;
    case ERROR_CONTAR_RUTAS:
      return false;
    default:
      return state;
  }
}

export function numeroRutas(state=initialState.contarRutas.numeroRutas, { type, payload }) {
  switch(type){
    case REQUEST_CONTAR_RUTAS:
      return 0;
    case SUCCESS_CONTAR_RUTAS:
      return payload.numeroRutas;
    case ERROR_CONTAR_RUTAS:
      return 0;
    default:
      return state;
  }
}

const getNumeroRutasState = (state) => state.rutas.contarRutas;

export const getContandoRutas = state => getNumeroRutasState(state).contandoRutas;
export const getNumeroRutas = state => getNumeroRutasState(state).numeroRutas;

export default combineReducers({
  contandoRutas,
  numeroRutas,
});