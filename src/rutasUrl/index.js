import { combineReducers } from 'redux';
import clientes from "./cliente-rutas";
import globales from "./globales-rutas";
import productos from "./producto-rutas";
import promociones from "./promocion-rutas";
import rutas from "./ruta-rutas";
import ventas from "./venta-rutas";

const rutasUrls = clientes.concat(globales).concat(productos).concat(promociones).concat(rutas).concat(ventas);

export default rutasUrls;
