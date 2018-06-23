import { REQUEST_BUSCAR_CLIENTE_CON_RUTA, SUCCESS_BUSCAR_CLIENTE_CON_RUTA, ERROR_BUSCAR_CLIENTE_CON_RUTA } from "./../../actions/cliente/buscar-cliente-con-ruta";
import { combineReducers } from 'redux';

const initialState = {
  buscarClienteConRuta: {
    buscandoClienteConRuta: false,
    clienteConRuta: {},
  },
};

export function buscandoClienteConRuta(state = initialState.buscarClienteConRuta.buscandoClienteConRuta, { type }) {
  switch(type){
    case REQUEST_BUSCAR_CLIENTE_CON_RUTA:
      return true;
    case SUCCESS_BUSCAR_CLIENTE_CON_RUTA:
      return false;
    case ERROR_BUSCAR_CLIENTE_CON_RUTA:
      return false;
    default:
      return state;
  }
}

export function clienteConRuta(state=initialState.buscarClienteConRuta.clienteConRuta, { type, payload }) {
  switch(type){
    case REQUEST_BUSCAR_CLIENTE_CON_RUTA:
      return {};
    case SUCCESS_BUSCAR_CLIENTE_CON_RUTA:
      return payload;
    case ERROR_BUSCAR_CLIENTE_CON_RUTA:
      return {};
    default:
      return {};
  }
}

const getBuscarClienteConRutaState = (state) => state.clientes.buscarClienteConRuta;

export const getBuscandoClienteConRuta = state => getBuscarClienteConRutaState(state).buscandoClienteConRuta;
export const getClienteConRuta = state => getBuscarClienteConRutaState(state).clienteConRuta;

export default combineReducers({
  buscandoClienteConRuta,
  clienteConRuta,
});