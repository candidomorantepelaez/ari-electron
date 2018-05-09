import { REQUEST_LISTADO_RUTAS, SUCCESS_LISTADO_RUTAS, ERROR_LISTADO_RUTAS } from "./../../actions/ruta/listado-rutas";
import { combineReducers } from 'redux';

const initialState = {
  listadoRutas: {
    buscando: false,
    resultado: [],
  },
};

export function buscando(state = initialState.listadoRutas.buscando, { type }) {
  switch(type){
    case REQUEST_LISTADO_RUTAS:
      return true;
    case SUCCESS_LISTADO_RUTAS:
      return false;
    case ERROR_LISTADO_RUTAS:
      return false;
    default:
      return state;
  }
}

export function resultado(state=initialState.listadoRutas.resultado, { type, payload }) {
  switch(type){
    case REQUEST_LISTADO_RUTAS:
      return [];
    case SUCCESS_LISTADO_RUTAS:
      return payload;
    case ERROR_LISTADO_RUTAS:
      return [];
    default:
      return state;
  }
}

const getListadoRutasState = (state) => state.rutas.listadoRutas;

export const getBuscando = state => getListadoRutasState(state).buscando;
export const getResultado = state => getListadoRutasState(state).resultado;

export default combineReducers({
  buscando,
  resultado,
});