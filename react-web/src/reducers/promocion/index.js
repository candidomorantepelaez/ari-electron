import listadoPromociones from "./listado-promociones";
import buscarPromocion from "./buscar-promocion";
import guardarPromocion from "./guardar-promocion";
import editarPromocion from "./editar-promocion";
import borrarPromociones from "./borrar-promocion";
import contarPromociones from "./contar-promociones";
import { combineReducers } from 'redux';

export default combineReducers({
  listadoPromociones,
  buscarPromocion,
  guardarPromocion,
  editarPromocion,
  borrarPromociones,
  contarPromociones
});