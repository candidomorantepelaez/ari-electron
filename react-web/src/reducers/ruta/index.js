import listadoRutas from "./listado-rutas";
import buscarRuta from "./buscar-ruta";
import guardarRuta from "./guardar-ruta";
import editarRuta from "./editar-ruta";
import borrarRutas from "./borrar-ruta";
import contarRutas from "./contar-rutas";
import { combineReducers } from 'redux';

export default combineReducers({
  listadoRutas,
  buscarRuta,
  guardarRuta,
  editarRuta,
  borrarRutas,
  contarRutas
});