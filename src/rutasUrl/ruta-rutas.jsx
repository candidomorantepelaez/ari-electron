import CreacionRutasPage from "./../pages/ruta/creacion-rutas-page";
import DetalleRutasPage from "./../pages/ruta/detalle-rutas-page";
import EdicionRutasPage from "./../pages/ruta/edicion-rutas-page";
import ListadoRutasPage from "./../pages/ruta/listado-rutas-page";

const rutas = [
  { path: "/rutas", component: ListadoRutasPage, exact: true },
  { path: "/rutas/crear", component: CreacionRutasPage, exact: true },
  { path: "/rutas/mostrar/:id", component: DetalleRutasPage, exact: true },
  { path: "/rutas/editar/:id", component: EdicionRutasPage, exact: true }
];

export default rutas;
