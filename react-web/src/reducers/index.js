import { combineReducers } from 'redux';
import globales from "./globales";
import productos from "./producto";
import promociones from "./promocion";
import rutas from "./ruta";
import ventas from "./venta";

export default combineReducers({
  globales,
  productos,
  promociones,
  rutas,
  ventas,
});