import { REQUEST_EDITAR_RUTA, SUCCESS_EDITAR_RUTA, ERROR_EDITAR_RUTA } from "./../../actions/ruta/editar-ruta";
import { combineReducers } from 'redux';

const initialState = {
  editarRuta: {
    rutaParaEditar: {},
    editando: false,
    rutaEditado: {},
  },
};

export function rutaParaEditar(state=initialState.editarRuta.rutaParaEditar, { type, payload }) {
  switch(type){
    case REQUEST_EDITAR_RUTA:
      return payload;
    case SUCCESS_EDITAR_RUTA:
      return state;
    case ERROR_EDITAR_RUTA:
      return state;
    default:
      return state;
  }
}

export function editando(state=initialState.editarRuta.editando, { type }) {
  switch(type){
    case REQUEST_EDITAR_RUTA:
      return true;
    case SUCCESS_EDITAR_RUTA:
      return false;
    case ERROR_EDITAR_RUTA:
      return false;
    default:
      return state;
  }
}

export function rutaEditado(state=initialState.editarRuta.rutaEditado, { type, payload }) {
  switch(type){
    case REQUEST_EDITAR_RUTA:
      return state;
    case SUCCESS_EDITAR_RUTA:
      return payload;
    case ERROR_EDITAR_RUTA:
      return state;
    default:
      return state;
  }
}

const getEditarRutaState = (state) => state.editarRuta;

export const getRutaParaEditar = state => getEditarRutaState(state).rutaParaEditar;
export const getEditando = state => getEditarRutaState(state).editando;
export const getRutaEditado = state => getEditarRutaState(state).rutaEditado;

export default combineReducers({
  rutaParaEditar,
  editando,
  rutaEditado,
});
