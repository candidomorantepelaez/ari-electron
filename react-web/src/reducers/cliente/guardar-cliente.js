import { REQUEST_GUARDAR_CLIENTE, SUCCESS_GUARDAR_CLIENTE, ERROR_GUARDAR_CLIENTE } from "./../../actions/cliente/guardar-cliente";
import { combineReducers } from 'redux';

const initialState = {
  guardarCliente: {
    clienteParaGuardar: {},
    guardando: false,
    clienteGuardado: {},
  },
};

export function clienteParaGuardar(state=initialState.guardarCliente.clienteParaGuardar, { type, payload }) {
  switch(type){
    case REQUEST_GUARDAR_CLIENTE:
      return payload;
    case SUCCESS_GUARDAR_CLIENTE:
      return state;
    case ERROR_GUARDAR_CLIENTE:
      return state;
    default:
      return state;
  }
}

export function guardando(state=initialState.guardarCliente.guardando, { type }) {
  switch(type){
    case REQUEST_GUARDAR_CLIENTE:
      return true;
    case SUCCESS_GUARDAR_CLIENTE:
      return false;
    case ERROR_GUARDAR_CLIENTE:
      return false;
    default:
      return state;
  }
}

export function clienteGuardado(state=initialState.guardarCliente.clienteGuardado, { type, payload }) {
  switch(type){
    case REQUEST_GUARDAR_CLIENTE:
      return state;
    case SUCCESS_GUARDAR_CLIENTE:
      return payload;
    case ERROR_GUARDAR_CLIENTE:
      return state;
    default:
      return state;
  }
}

const getGuardarClienteState = (state) => state.clientes.guardarCliente;

export const getClienteParaGuardar = state => getGuardarClienteState(state).clienteParaGuardar;
export const getGuardando = state => getGuardarClienteState(state).guardando;
export const getClienteGuardado = state => getGuardarClienteState(state).clienteGuardado

export default combineReducers({
  clienteParaGuardar,
  guardando,
  clienteGuardado
});