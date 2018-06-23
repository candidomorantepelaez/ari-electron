import { REQUEST_LISTADO_PROMOCIONES, SUCCESS_LISTADO_PROMOCIONES, ERROR_LISTADO_PROMOCIONES } from "./../../actions/promocion/listado-promociones";
import { combineReducers } from 'redux';

const initialState = {
  listadoPromociones: {
    buscandoPromociones: false,
    listadoPromociones: [],
  },
};

export function buscandoPromociones(state = initialState.listadoPromociones.buscandoPromociones, { type }) {
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

export function listadoPromociones(state=initialState.listadoPromociones.listadoPromociones, { type, payload }) {
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

export const getBuscandoPromociones = state => getListadoPromocionesState(state).buscandoPromociones;
export const getListadoPromociones = state => getListadoPromocionesState(state).listadoPromociones;

export default combineReducers({
  buscandoPromociones,
  listadoPromociones,
});