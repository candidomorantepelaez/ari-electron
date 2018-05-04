import { REQUEST_BORRAR_CLIENTE, SUCCESS_BORRAR_CLIENTE, ERROR_BORRAR_CLIENTE } from "./../../actions/cliente/borrar-cliente";
import { combineReducers } from 'redux';

const initialState = {
  borrarCliente: {
    clienteParaBorrar: {},
    borrando: false,
    clienteBorrado: {},
  },
};

export function clienteParaBorrar(state=initialState.borrarCliente.clienteParaBorrar, { type, payload }) {
  switch(type){
    case REQUEST_BORRAR_CLIENTE:
      return state;
    case SUCCESS_BORRAR_CLIENTE:
      return state;
    case ERROR_BORRAR_CLIENTE:
      return state;
    default:
      return state;
  }
}

export function borrando(state=initialState.borrarCliente.borrando, { type }) {
  switch(type){
    case REQUEST_BORRAR_CLIENTE:
      return true;
    case SUCCESS_BORRAR_CLIENTE:
      return false;
    case ERROR_BORRAR_CLIENTE:
      return false;
    default:
      return state;
  }
}

export function clienteBorrado(state=initialState.borrarCliente.clienteBorrado, { type, payload }) {
  switch(type){
    case REQUEST_BORRAR_CLIENTE:
      return state;
    case SUCCESS_BORRAR_CLIENTE:
      return payload;
    case ERROR_BORRAR_CLIENTE:
      return state;
    default:
      return state;
  }
}

const getBorrarClienteState = (state) => state.borrarCliente;

export const getClienteParaBorrar = state => getBorrarClienteState(state).clienteParaBorrar;
export const getBorrando = state => getBorrarClienteState(state).borrando;
export const getClienteBorrado = state => getBorrarClienteState(state).clienteBorrado;

export default combineReducers({
  clienteParaBorrar,
  borrando,
  clienteBorrado,
});
