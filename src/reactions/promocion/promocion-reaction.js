import { SUCCESS_BORRAR_PROMOCION, ERROR_BORRAR_PROMOCION } from "./../../actions/promocion/borrar-promocion";
import { SUCCESS_GUARDAR_PROMOCION, ERROR_GUARDAR_PROMOCION } from "./../../actions/promocion/guardar-promocion";
import { SUCCESS_EDITAR_PROMOCION, ERROR_EDITAR_PROMOCION } from "./../../actions/promocion/editar-promocion";
import { ERROR_BUSCAR_PROMOCION } from "./../../actions/promocion/buscar-promocion";
import { ERROR_LISTADO_PROMOCIONES } from "./../../actions/promocion/listado-promociones";
import history from "./../../config/history";
import { lanzarMostrarAlerta } from "./../../thunks/globales/alertas";

export const promocion = store => next => action => {
  switch(action.type){
    case SUCCESS_BORRAR_PROMOCION:
      store.dispatch(lanzarMostrarAlerta({ tipo: "success", mensaje: "Promocion borrada correctamente" }));
      history.push("/promociones");
      break;
    case ERROR_BORRAR_PROMOCION:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al borrar promocion" }));
      break;
    case SUCCESS_GUARDAR_PROMOCION:
      store.dispatch(lanzarMostrarAlerta({ tipo: "success", mensaje: "Promocion creada correctamente" }));
      history.push("/promociones");
      break;
    case ERROR_GUARDAR_PROMOCION:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al crear la promocion" }));
      break;
    case SUCCESS_EDITAR_PROMOCION:
      store.dispatch(lanzarMostrarAlerta({ tipo: "success", mensaje: "Promocion editada correctamente" }));
      history.push("/promociones");
      break;
    case ERROR_EDITAR_PROMOCION:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al editar la promocion" }));
      break;
    case ERROR_BUSCAR_PROMOCION:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al recuperar datos de la promocion" }));
      break;
    case ERROR_LISTADO_PROMOCIONES:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al recuperar listado de promociones" }));
      break;
    default:
      break;
  }

  let result = next(action);
  return result;
}