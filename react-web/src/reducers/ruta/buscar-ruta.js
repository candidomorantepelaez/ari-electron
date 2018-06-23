import { REQUEST_BUSCAR_RUTA, SUCCESS_BUSCAR_RUTA, ERROR_BUSCAR_RUTA } from "./../../actions/ruta/buscar-ruta";
import { combineReducers } from 'redux';

const initialState = {
  buscarRuta: {
    buscandoRuta: false,
    ruta: {},
  },
};

export function buscandoRuta(state = initialState.buscarRuta.buscandoRuta, { type }) {
  switch(type){
    case REQUEST_BUSCAR_RUTA:
      return true;
    case SUCCESS_BUSCAR_RUTA:
      return false;
    case ERROR_BUSCAR_RUTA:
      return false;
    default:
      return state;
  }
}

export function ruta(state=initialState.buscarRuta.ruta, { type, payload }) {
  switch(type){
    case REQUEST_BUSCAR_RUTA:
      return {};
    case SUCCESS_BUSCAR_RUTA:
      return payload;
    case ERROR_BUSCAR_RUTA:
      return {};
    default:
      return {};
  }
}

const getBuscarRutaState = (state) => state.rutas.buscarRuta;

export const getBuscandoRuta = state => getBuscarRutaState(state).buscandoRuta;
export const getRuta = state => getBuscarRutaState(state).ruta;

export default combineReducers({
  buscandoRuta,
  ruta,
});