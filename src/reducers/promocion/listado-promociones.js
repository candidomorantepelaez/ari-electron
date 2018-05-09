import { REQUEST_LISTADO_PROMOCIONES, SUCCESS_LISTADO_PROMOCIONES, ERROR_LISTADO_PROMOCIONES } from "./../../actions/promocion/listado-promociones";
import { combineReducers } from 'redux';

const initialState = {
  listadoPromociones: {
    buscando: false,
    resultado: [],
  },
};

export function buscando(state = initialState.listadoPromociones.buscando, { type }) {
  switch(type){
    case REQUEST_LISTADO_PROMOCIONES:
      return true;
    case SUCCESS_LISTADO_PROMOCIONES:
      return false;
    case ERROR_LISTADO_PROMOCIONES:
      return false;
    default:
      return state;
  }
}

export function resultado(state=initialState.listadoPromociones.resultado, { type, payload }) {
  switch(type){
    case REQUEST_LISTADO_PROMOCIONES:
      return [];
    case SUCCESS_LISTADO_PROMOCIONES:
      return payload;
    case ERROR_LISTADO_PROMOCIONES:
      return [];
    default:
      return state;
  }
}

const getListadoPromocionesState = (state) => state.promociones.listadoPromociones;

export const getBuscando = state => getListadoPromocionesState(state).buscando;
export const getResultado = state => getListadoPromocionesState(state).resultado;

export default combineReducers({
  buscando,
  resultado,
});