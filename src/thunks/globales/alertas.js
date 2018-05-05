import { mostrarAlerta, cerrarAlerta } from "./../../actions/globales/alertas";

export function lanzarMostrarAlerta(data) {
  return (dispatch) => dispatch(mostrarAlerta(data))
};

export function lanzarCerrarAlerta(data) {
  return (dispatch) => dispatch(cerrarAlerta(data))
};