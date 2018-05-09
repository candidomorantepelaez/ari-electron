import { combineReducers } from 'redux';
import clientes from "./cliente";
import globales from "./globales";
import productos from "./producto";
import promociones from "./promocion";
import rutas from "./ruta";
import ventas from "./venta";

export default combineReducers({
  clientes,
  globales,
  productos,
  promociones,
  rutas,
  ventas,
});