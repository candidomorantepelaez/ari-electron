import { REQUEST_LISTADO_CLIENTES, SUCCESS_LISTADO_CLIENTES, ERROR_LISTADO_CLIENTES } from "./../../actions/cliente/listado-clientes";
import { combineReducers } from 'redux';

const initialState = {
  listadoClientes: {
    buscando: false,
    resultado: [],
  },
};

export function buscando(state = initialState.listadoClientes.buscando, { type }) {
  switch(type){
    case REQUEST_LISTADO_CLIENTES:
      return true;
    case SUCCESS_LISTADO_CLIENTES:
      return false;
    case ERROR_LISTADO_CLIENTES:
      return false;
    default:
      return state;
  }
}

export function resultado(state=initialState.listadoClientes.resultado, { type, payload }) {
  switch(type){
    case REQUEST_LISTADO_CLIENTES:
      return [];
    case SUCCESS_LISTADO_CLIENTES:
      return payload;
    case ERROR_LISTADO_CLIENTES:
      return [];
    default:
      return state;
  }
}

const getListadoClientesState = (state) => state.listadoClientes;

export const getBuscando = state => getListadoClientesState(state).buscando;
export const getResultado = state => getListadoClientesState(state).resultado;

export default combineReducers({
  buscando,
  resultado,
});