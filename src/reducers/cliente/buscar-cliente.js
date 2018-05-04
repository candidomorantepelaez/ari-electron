import { REQUEST_BUSCAR_CLIENTE, SUCCESS_BUSCAR_CLIENTE, ERROR_BUSCAR_CLIENTE } from "./../../actions/cliente/buscar-cliente";
import { combineReducers } from 'redux';

const initialState = {
  buscarCliente: {
    buscandoCliente: false,
    cliente: {},
  },
};

export function buscandoCliente(state = initialState.buscarCliente.buscandoCliente, { type }) {
  switch(type){
    case REQUEST_BUSCAR_CLIENTE:
      return true;
    case SUCCESS_BUSCAR_CLIENTE:
      return false;
    case ERROR_BUSCAR_CLIENTE:
      return false;
    default:
      return state;
  }
}

export function cliente(state=initialState.buscarCliente.cliente, { type, payload }) {
  switch(type){
    case REQUEST_BUSCAR_CLIENTE:
      return {};
    case SUCCESS_BUSCAR_CLIENTE:
      return payload;
    case ERROR_BUSCAR_CLIENTE:
      return {};
    default:
      return {};
  }
}

const getBuscarClienteState = (state) => state.buscarCliente;

export const getBuscandoCliente = state => getBuscarClienteState(state).buscandoCliente;
export const getCliente = state => getBuscarClienteState(state).cliente;

export default combineReducers({
  buscandoCliente,
  cliente,
});