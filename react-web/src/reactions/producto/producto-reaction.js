import { SUCCESS_BORRAR_PRODUCTO, ERROR_BORRAR_PRODUCTO } from "./../../actions/producto/borrar-producto";
import { SUCCESS_GUARDAR_PRODUCTO, ERROR_GUARDAR_PRODUCTO } from "./../../actions/producto/guardar-producto";
import { SUCCESS_EDITAR_PRODUCTO, ERROR_EDITAR_PRODUCTO } from "./../../actions/producto/editar-producto";
import { ERROR_BUSCAR_PRODUCTO } from "./../../actions/producto/buscar-producto";
import { ERROR_LISTADO_PRODUCTOS } from "./../../actions/producto/listado-productos";
import history from "./../../config/history";
import { lanzarMostrarAlerta } from "./../../thunks/globales/alertas";

export const producto = store => next => action => {
  switch(action.type){
    case SUCCESS_BORRAR_PRODUCTO:
      store.dispatch(lanzarMostrarAlerta({ tipo: "success", mensaje: "Producto borrado correctamente" }));
      history.push("/productos");
      break;
    case ERROR_BORRAR_PRODUCTO:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al borrar producto" }));
      break;
    case SUCCESS_GUARDAR_PRODUCTO:
      store.dispatch(lanzarMostrarAlerta({ tipo: "success", mensaje: "Producto creado correctamente" }));
      history.push("/productos");
      break;
    case ERROR_GUARDAR_PRODUCTO:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al crear producto" }));
      break;
    case SUCCESS_EDITAR_PRODUCTO:
      store.dispatch(lanzarMostrarAlerta({ tipo: "success", mensaje: "Producto editado correctamente" }));
      history.push("/productos");
      break;
    case ERROR_EDITAR_PRODUCTO:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al editar producto" }));
      break;
    case ERROR_BUSCAR_PRODUCTO:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al recuperar datos del producto" }));
      break;
    case ERROR_LISTADO_PRODUCTOS:
      store.dispatch(lanzarMostrarAlerta({ tipo: "error", mensaje: "Error al recuperar listado de productos" }));
      break;
    default:
      break;
  }

  let result = next(action);
  return result;
}