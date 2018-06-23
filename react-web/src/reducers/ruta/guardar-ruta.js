import { REQUEST_GUARDAR_RUTA, SUCCESS_GUARDAR_RUTA, ERROR_GUARDAR_RUTA } from "./../../actions/ruta/guardar-ruta";
import { combineReducers } from 'redux';

const initialState = {
  guardarRuta: {
    rutaParaGuardar: {},
    guardando: false,
    rutaGuardado: {},
  },
};

export function rutaParaGuardar(state=initialState.guardarRuta.rutaParaGuardar, { type, payload }) {
  switch(type){
    case REQUEST_GUARDAR_RUTA:
      return payload;
    case SUCCESS_GUARDAR_RUTA:
      return state;
    case ERROR_GUARDAR_RUTA:
      return state;
    default:
      return state;
  }
}

export function guardando(state=initialState.guardarRuta.guardando, { type }) {
  switch(type){
    case REQUEST_GUARDAR_RUTA:
      return true;
    case SUCCESS_GUARDAR_RUTA:
      return false;
    case ERROR_GUARDAR_RUTA:
      return false;
    default:
      return state;
  }
}

export function rutaGuardado(state=initialState.guardarRuta.rutaGuardado, { type, payload }) {
  switch(type){
    case REQUEST_GUARDAR_RUTA:
      return state;
    case SUCCESS_GUARDAR_RUTA:
      return payload;
    case ERROR_GUARDAR_RUTA:
      return state;
    default:
      return state;
  }
}

const getGuardarRutaState = (state) => state.rutas.guardarRuta;

export const getRutaParaGuardar = state => getGuardarRutaState(state).rutaParaGuardar;
export const getGuardando = state => getGuardarRutaState(state).guardando;
export const getRutaGuardado = state => getGuardarRutaState(state).rutaGuardado

export default combineReducers({
  rutaParaGuardar,
  guardando,
  rutaGuardado
});