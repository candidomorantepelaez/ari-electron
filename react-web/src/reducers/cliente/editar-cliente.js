import { REQUEST_EDITAR_CLIENTE, SUCCESS_EDITAR_CLIENTE, ERROR_EDITAR_CLIENTE } from "./../../actions/cliente/editar-cliente";
import { combineReducers } from 'redux';

const initialState = {
  editarCliente: {
    clienteParaEditar: {},
    editando: false,
    clienteEditado: {},
  },
};

export function clienteParaEditar(state=initialState.editarCliente.clienteParaEditar, { type, payload }) {
  switch(type){
    case REQUEST_EDITAR_CLIENTE:
      return payload;
    case SUCCESS_EDITAR_CLIENTE:
      return state;
    case ERROR_EDITAR_CLIENTE:
      return state;
    default:
      return state;
  }
}

export function editando(state=initialState.editarCliente.editando, { type }) {
  switch(type){
    case REQUEST_EDITAR_CLIENTE:
      return true;
    case SUCCESS_EDITAR_CLIENTE:
      return false;
    case ERROR_EDITAR_CLIENTE:
      return false;
    default:
      return state;
  }
}

export function clienteEditado(state=initialState.editarCliente.clienteEditado, { type, payload }) {
  switch(type){
    case REQUEST_EDITAR_CLIENTE:
      return state;
    case SUCCESS_EDITAR_CLIENTE:
      return payload;
    case ERROR_EDITAR_CLIENTE:
      return state;
    default:
      return state;
  }
}

const getEditarClienteState = (state) => state.editarCliente;

export const getClienteParaEditar = state => getEditarClienteState(state).clienteParaEditar;
export const getEditando = state => getEditarClienteState(state).editando;
export const getClienteEditado = state => getEditarClienteState(state).clienteEditado;

export default combineReducers({
  clienteParaEditar,
  editando,
  clienteEditado,
});
