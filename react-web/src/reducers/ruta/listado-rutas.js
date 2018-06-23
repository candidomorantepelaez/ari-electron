import { REQUEST_LISTADO_RUTAS, SUCCESS_LISTADO_RUTAS, ERROR_LISTADO_RUTAS } from "./../../actions/ruta/listado-rutas";
import { combineReducers } from 'redux';

const initialState = {
  listadoRutas: {
    buscandoRutas: false,
    listadoRutas: [],
  },
};

export function buscandoRutas(state = initialState.listadoRutas.buscandoRutas, { type }) {
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

export function listadoRutas(state=initialState.listadoRutas.listadoRutas, { type, payload }) {
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

export const getBuscandoRutas = state => getListadoRutasState(state).buscandoRutas;
export const getListadoRutas = state => getListadoRutasState(state).listadoRutas;

export default combineReducers({
  buscandoRutas,
  listadoRutas,
});