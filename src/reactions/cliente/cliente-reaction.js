import { SUCCESS_BORRAR_CLIENTE } from "./../../actions/cliente/borrar-cliente";
import history from "./../../config/history";
import { alertSuccess } from "./../../thunks/globales/success";

export const cliente = store => next => action => {
  switch(action.type){
    case SUCCESS_BORRAR_CLIENTE:
      console.log(history.location);
      history.push("/home");
      alertSuccess("borrado con exito.");
      console.log(history.location);
      break;
    default:
      break;
  }

  let result = next(action);
  return result;
}