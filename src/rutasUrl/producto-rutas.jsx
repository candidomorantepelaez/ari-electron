import CreacionProductosPage from "./../pages/producto/creacion-productos-page";
import DetalleProductosPage from "./../pages/producto/detalle-productos-page";
import EdicionProductosPage from "./../pages/producto/edicion-productos-page";
import ListadoProductosPage from "./../pages/producto/listado-productos-page";

const rutas = [
  { path: "/productos", component: ListadoProductosPage, exact: true },
  { path: "/productos/crear", component: CreacionProductosPage, exact: true },
  { path: "/productos/mostrar/:id", component: DetalleProductosPage, exact: true },
  { path: "/productos/editar/:id", component: EdicionProductosPage, exact: true }
];

export default rutas;
