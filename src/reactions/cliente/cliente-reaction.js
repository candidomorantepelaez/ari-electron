import { SUCCESS_BORRAR_CLIENTE } from "./../../actions/cliente/borrar-cliente";
import history from "./../../config/history";
import { lanzarMostrarAlerta } from "./../../thunks/globales/alertas";

export const cliente = store => next => action => {
  switch(action.type){
    case SUCCESS_BORRAR_CLIENTE:
      store.dispatch(lanzarMostrarAlerta({ tipo: "success", mensaje: "Cliente borrado correctamente" }));
      history.push("/home");
      break;
    default:
      break;
  }

  let result = next(action);
  return result;
}