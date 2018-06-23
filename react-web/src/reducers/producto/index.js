import listadoProductos from "./listado-productos";
import buscarProducto from "./buscar-producto";
import guardarProducto from "./guardar-producto";
import editarProducto from "./editar-producto";
import borrarProductos from "./borrar-producto";
import contarProductos from "./contar-productos";
import { combineReducers } from 'redux';

export default combineReducers({
  listadoProductos,
  buscarProducto,
  guardarProducto,
  editarProducto,
  borrarProductos,
  contarProductos
});