import { REQUEST_BORRAR_RUTA, SUCCESS_BORRAR_RUTA, ERROR_BORRAR_RUTA } from "./../../actions/ruta/borrar-ruta";
import { combineReducers } from 'redux';

const initialState = {
  borrarRuta: {
    rutaParaBorrar: {},
    borrando: false,
    rutaBorrado: {},
  },
};

export function rutaParaBorrar(state=initialState.borrarRuta.rutaParaBorrar, { type, payload }) {
  switch(type){
    case REQUEST_BORRAR_RUTA:
      return state;
    case SUCCESS_BORRAR_RUTA:
      return state;
    case ERROR_BORRAR_RUTA:
      return state;
    default:
      return state;
  }
}

export function borrando(state=initialState.borrarRuta.borrando, { type }) {
  switch(type){
    case REQUEST_BORRAR_RUTA:
      return true;
    case SUCCESS_BORRAR_RUTA:
      return false;
    case ERROR_BORRAR_RUTA:
      return false;
    default:
      return state;
  }
}

export function rutaBorrado(state=initialState.borrarRuta.rutaBorrado, { type, payload }) {
  switch(type){
    case REQUEST_BORRAR_RUTA:
      return state;
    case SUCCESS_BORRAR_RUTA:
      return payload;
    case ERROR_BORRAR_RUTA:
      return state;
    default:
      return state;
  }
}

const getBorrarRutaState = (state) => state.rutas.borrarRuta;

export const getRutaParaBorrar = state => {
  return getBorrarRutaState(state).rutaParaBorrar;
}
export const getBorrando = state => {
  return getBorrarRutaState(state).borrando;
}
export const getRutaBorrado = state => {
  return getBorrarRutaState(state).rutaBorrado;
}

export default combineReducers({
  rutaParaBorrar,
  borrando,
  rutaBorrado,
});
