import { SUCCESS_BORRAR_CLIENTE, ERROR_BORRAR_CLIENTE } from "./../../actions/cliente/borrar-cliente";
import { SUCCESS_GUARDAR_CLIENTE, ERROR_GUARDAR_CLIENTE } from "./../../actions/cliente/guardar-cliente";
import { SUCCESS_EDITAR_CLIENTE, ERROR_EDITAR_CLIENTE } from "./../../actions/cliente/editar-cliente";
import { ERROR_BUSCAR_CLIENTE } from "./../../actions/cliente/buscar-cliente";
import { ERROR_LISTADO_CLIENTES } from "./../../actions/cliente/listado-clientes";
import history from "./../../config/history";
import { lanzarMostrarAlerta } from "./../../thunks/globales/alertas";

export const cliente = store => next => action => {
  switch(action.type){
    case SUCCESS_BORRAR_CLIENTE:
      store.dispatch(lanzarMostrarAlerta({ tipo: "success", mensaje: "Cliente borrado correctamente" }));
      history.push("/clientes");
      break;
    case ERROR_BORRAR_CLIENTE:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al borrar cliente" }));
      break;
    case SUCCESS_GUARDAR_CLIENTE:
      store.dispatch(lanzarMostrarAlerta({ tipo: "success", mensaje: "Cliente creado correctamente" }));
      history.push("/clientes");
      break;
    case ERROR_GUARDAR_CLIENTE:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al crear cliente" }));
      break;
    case SUCCESS_EDITAR_CLIENTE:
      store.dispatch(lanzarMostrarAlerta({ tipo: "success", mensaje: "Cliente editado correctamente" }));
      history.push("/clientes");
      break;
    case ERROR_EDITAR_CLIENTE:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al editar cliente" }));
      break;
    case ERROR_BUSCAR_CLIENTE:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al recuperar datos del cliente" }));
      break;
    case ERROR_LISTADO_CLIENTES:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al recuperar listado de clientes" }));
      break;
    default:
      break;
  }

  let result = next(action);
  return result;
}