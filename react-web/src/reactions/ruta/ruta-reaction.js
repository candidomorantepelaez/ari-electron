import { SUCCESS_BORRAR_RUTA, ERROR_BORRAR_RUTA } from "./../../actions/ruta/borrar-ruta";
import { SUCCESS_GUARDAR_RUTA, ERROR_GUARDAR_RUTA } from "./../../actions/ruta/guardar-ruta";
import { SUCCESS_EDITAR_RUTA, ERROR_EDITAR_RUTA } from "./../../actions/ruta/editar-ruta";
import { ERROR_BUSCAR_RUTA } from "./../../actions/ruta/buscar-ruta";
import { ERROR_LISTADO_RUTAS } from "./../../actions/ruta/listado-rutas";
import history from "./../../config/history";
import { lanzarMostrarAlerta } from "./../../thunks/globales/alertas";

export const ruta = store => next => action => {
  switch(action.type){
    case SUCCESS_BORRAR_RUTA:
      store.dispatch(lanzarMostrarAlerta({ tipo: "success", mensaje: "Ruta borrada correctamente" }));
      history.push("/rutas");
      break;
    case ERROR_BORRAR_RUTA:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al borrar ruta" }));
      break;
    case SUCCESS_GUARDAR_RUTA:
      store.dispatch(lanzarMostrarAlerta({ tipo: "success", mensaje: "Ruta creado correctamente" }));
      history.push("/rutas");
      break;
    case ERROR_GUARDAR_RUTA:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al crear la ruta" }));
      break;
    case SUCCESS_EDITAR_RUTA:
      store.dispatch(lanzarMostrarAlerta({ tipo: "success", mensaje: "Ruta editado correctamente" }));
      history.push("/rutas");
      break;
    case ERROR_EDITAR_RUTA:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al editar ruta" }));
      break;
    case ERROR_BUSCAR_RUTA:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al recuperar datos de la ruta" }));
      break;
    case ERROR_LISTADO_RUTAS:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al recuperar listado de rutas" }));
      break;
    default:
      break;
  }

  let result = next(action);
  return result;
}