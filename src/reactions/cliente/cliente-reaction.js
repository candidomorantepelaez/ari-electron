import { SUCCESS_BORRAR_CLIENTE } from "./../../actions/cliente/borrar-cliente";
import history from "./../../config/history";
import { lanzarMostrarAlerta } from "./../../thunks/globales/alertas";

export const cliente = store => next => action => {
  switch(action.type){
    case SUCCESS_BORRAR_CLIENTE:
      console.log(history.location);
      history.push("/home");
      lanzarMostrarAlerta({ tipo: "success", mensaje: "Cliente borrado correctamente" });
      console.log(history.location);
      break;
    default:
      break;
  }

  let result = next(action);
  return result;
}