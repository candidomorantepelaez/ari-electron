import { REQUEST_CONTAR_CLIENTES, SUCCESS_CONTAR_CLIENTES, ERROR_CONTAR_CLIENTES } from "./../../actions/cliente/contar-clientes";
import { combineReducers } from 'redux';

const initialState = {
  numeroClientes: {
    contandoClientes: false,
    numeroClientes: 0,
  },
};

export function contandoClientes(state = initialState.numeroClientes.contandoClientes, { type }) {
  switch(type){
    case REQUEST_CONTAR_CLIENTES:
      return true;
    case SUCCESS_CONTAR_CLIENTES:
      return false;
    case ERROR_CONTAR_CLIENTES:
      return false;
    default:
      return state;
  }
}

export function numeroClientes(state = initialState.numeroClientes.numeroClientes, { type, payload }) {
  switch(type){
    case REQUEST_CONTAR_CLIENTES:
      return 0;
    case SUCCESS_CONTAR_CLIENTES:
      return payload.numeroClientes;
    case ERROR_CONTAR_CLIENTES:
      return 0;
    default:
      return state;
  }
}

const getNumeroClientesState = (state) => {
  return state.clientes.contarClientes;
}

export const getContandoClientes = state => {
  return getNumeroClientesState(state).contandoClientes
};
export const getNumeroClientes = state => {
  return getNumeroClientesState(state).numeroClientes
};

export default combineReducers({
  contandoClientes,
  numeroClientes,
});