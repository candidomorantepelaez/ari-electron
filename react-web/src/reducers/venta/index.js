import listadoVentas from "./listado-ventas";
import buscarVenta from "./buscar-venta";
import guardarVenta from "./guardar-venta";
import editarVenta from "./editar-venta";
import borrarVentas from "./borrar-venta";
import contarVentas from "./contar-ventas";
import { combineReducers } from 'redux';

export default combineReducers({
  listadoVentas,
  buscarVenta,
  guardarVenta,
  editarVenta,
  borrarVentas,
  contarVentas
});