import CreacionVentasPage from "./../pages/venta/creacion-ventas-page";
import DetalleVentasPage from "./../pages/venta/detalle-ventas-page";
import EdicionVentasPage from "./../pages/venta/edicion-ventas-page";
import ListadoVentasPage from "./../pages/venta/listado-ventas-page";

const rutas = [
  { path: "/ventas", component: ListadoVentasPage, exact: true },
  { path: "/ventas/crear", component: CreacionVentasPage, exact: true },
  { path: "/ventas/mostrar/:id", component: DetalleVentasPage, exact: true },
  { path: "/ventas/editar/:id", component: EdicionVentasPage, exact: true }
];

export default rutas;
