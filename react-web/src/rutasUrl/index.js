import clientes from "./cliente-rutas";
import productos from "./producto-rutas";
import promociones from "./promocion-rutas";
import rutas from "./ruta-rutas";
import ventas from "./venta-rutas";

const rutasUrls = clientes.concat(productos).concat(promociones).concat(rutas).concat(ventas);

export default rutasUrls;
