import { REQUEST_LISTADO_CLIENTES,
  SUCCESS_LISTADO_CLIENTES,
  ERROR_LISTADO_CLIENTES,
  REQUEST_BUSCAR_CLIENTE,
  SUCCESS_BUSCAR_CLIENTE,
  ERROR_BUSCAR_CLIENTE,
  REQUEST_GUARDAR_CLIENTE,
  SUCCESS_GUARDAR_CLIENTE,
  ERROR_GUARDAR_CLIENTE,
  REQUEST_EDITAR_CLIENTE,
  SUCCESS_EDITAR_CLIENTE,
  ERROR_EDITAR_CLIENTE,
  REQUEST_BORRAR_CLIENTE,
  SUCCESS_BORRAR_CLIENTE,
  ERROR_BORRAR_CLIENTE } from "./../actions/cliente-actions";
import { combineReducers } from 'redux';

const initialState = {
  cliente: {
    buscando: false,
    resultado: [],
    buscandoCliente: false,
    cliente: {},
    clienteParaGuardar: {},
    guardando: false,
    clienteGuardado: {},
    clienteParaEditar: {},
    editando: false,
    clienteEditado: {},
    clienteParaBorrar: {},
    borrando: false,
    clienteBorrado: {}
  },
};

export function buscando(state = initialState.cliente.buscando, { type }) {
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

export function resultado(state=initialState.cliente.resultado, { type, payload }) {
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

export function buscandoCliente(state = initialState.cliente.buscandoCliente, { type }) {
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

export function cliente(state=initialState.cliente.cliente, { type, payload }) {
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

export function clienteParaGuardar(state=initialState.cliente.clienteParaGuardar, { type, payload }) {
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

export function guardando(state=initialState.cliente.guardando, { type }) {
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

export function clienteGuardado(state=initialState.cliente.clienteGuardado, { type, payload }) {
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

export function clienteParaEditar(state=initialState.cliente.clienteParaEditar, { type, payload }) {
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

export function editando(state=initialState.cliente.editando, { type }) {
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

export function clienteEditado(state=initialState.cliente.clienteEditado, { type, payload }) {
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

export function clienteParaBorrar(state=initialState.cliente.clienteParaBorrar, { type, payload }) {
  switch(type){
    case REQUEST_BORRAR_CLIENTE:
      return payload;
    case SUCCESS_BORRAR_CLIENTE:
      return state;
    case ERROR_BORRAR_CLIENTE:
      return state;
    default:
      return state;
  }
}

export function borrando(state=initialState.cliente.borrando, { type }) {
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

export function clienteBorrado(state=initialState.cliente.clienteBorrado, { type, payload }) {
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

export const getBuscando = state => state.buscando;
export const getResultado = state => state.resultado;
export const getBuscandoCliente = state => state.buscandoCliente;
export const getCliente = state => state.cliente;
export const getClienteParaGuardar = state => state.clienteParaGuardar;
export const getGuardando = state => state.guardando;
export const getClienteGuardado = state => state.clienteGuardado;
export const getClienteParaEditar = state => state.clienteParaEditar;
export const getEditando = state => state.editando;
export const getClienteEditado = state => state.clienteEditado;
export const getClienteParaBorrar = state => state.clienteParaBorrar;
export const getBorrando = state => state.borrando;
export const getClienteBorrado = state => state.clienteBorrado;

export default combineReducers({
  buscando,
  resultado,
  buscandoCliente,
  cliente,
  clienteParaGuardar,
  guardando,
  clienteGuardado,
  clienteParaEditar,
  editando,
  clienteEditado,
  clienteParaBorrar,
  borrando,
  clienteBorrado,
});




