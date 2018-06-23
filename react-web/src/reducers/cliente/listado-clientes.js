import { REQUEST_LISTADO_CLIENTES, SUCCESS_LISTADO_CLIENTES, ERROR_LISTADO_CLIENTES } from "./../../actions/cliente/listado-clientes";
import { combineReducers } from 'redux';

const initialState = {
  listadoClientes: {
    buscandoClientes: false,
    listadoClientes: [],
  },
};

export function buscandoClientes(state = initialState.listadoClientes.buscandoClientes, { type }) {
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

export function listadoClientes(state=initialState.listadoClientes.listadoClientes, { type, payload }) {
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

const getListadoClientesState = (state) => state.clientes.listadoClientes;

export const getBuscandoClientes = state => getListadoClientesState(state).buscandoClientes;
export const getListadoClientes = state => getListadoClientesState(state).listadoClientes;

export default combineReducers({
  buscandoClientes,
  listadoClientes,
});