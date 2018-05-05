import { MOSTRAR_ALERTA, CERRAR_ALERTA } from "./../../actions/globales/alertas";
import { combineReducers } from 'redux';

const initialState = {
  alertas: {
    alertas: [],
  },
};

export function alertas(state=initialState.alertas.alertas, { type, payload }) {
  switch(type){
    case MOSTRAR_ALERTA:
      let existentes = state.slice();
      existentes.push(payload);
      return existentes;
    case CERRAR_ALERTA:
      return payload;
    default:
      return state;
  }
}

const getAlertasState = (state) => state.globales.alertas;

export const getAlertas = state => getAlertasState(state).alertas;

export default combineReducers({
  alertas,
});