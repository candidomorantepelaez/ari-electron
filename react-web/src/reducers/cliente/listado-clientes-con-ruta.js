import { REQUEST_LISTADO_CLIENTES_CON_RUTA, SUCCESS_LISTADO_CLIENTES_CON_RUTA, ERROR_LISTADO_CLIENTES_CON_RUTA } from "./../../actions/cliente/listado-clientes-con-ruta";
import { combineReducers } from 'redux';

const initialState = {
  listadoClientesConRuta: {
    buscandoClientesConRuta: false,
    listadoClientesConRuta: [],
  },
};

export function buscandoClientesConRuta(state = initialState.listadoClientesConRuta.buscandoClientesConRuta, { type }) {
  switch(type){
    case REQUEST_LISTADO_CLIENTES_CON_RUTA:
      return true;
    case SUCCESS_LISTADO_CLIENTES_CON_RUTA:
      return false;
    case ERROR_LISTADO_CLIENTES_CON_RUTA:
      return false;
    default:
      return state;
  }
}

export function listadoClientesConRuta(state=initialState.listadoClientesConRuta.listadoClientesConRuta, { type, payload }) {
  switch(type){
    case REQUEST_LISTADO_CLIENTES_CON_RUTA:
      return [];
    case SUCCESS_LISTADO_CLIENTES_CON_RUTA:
      return payload;
    case ERROR_LISTADO_CLIENTES_CON_RUTA:
      return [];
    default:
      return state;
  }
}

const getListadoClientesConRutaState = (state) => state.clientes.listadoClientesConRuta;

export const getBuscandoClientesConRuta = state => getListadoClientesConRutaState(state).buscandoClientesConRuta;
export const getListadoClientesConRuta = state => getListadoClientesConRutaState(state).listadoClientesConRuta;

export default combineReducers({
  buscandoClientesConRuta,
  listadoClientesConRuta,
});