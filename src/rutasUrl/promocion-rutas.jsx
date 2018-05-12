import CreacionPromocionesPage from "./../pages/promocion/creacion-promociones-page";
import DetallePromocionesPage from "./../pages/promocion/detalle-promociones-page";
import EdicionPromocionesPage from "./../pages/promocion/edicion-promociones-page";
import ListadoPromocionesPage from "./../pages/promocion/listado-promociones-page";

const rutas = [
  { path: "/promociones", component: ListadoPromocionesPage, exact: true },
  { path: "/promociones/crear", component: CreacionPromocionesPage, exact: true },
  { path: "/promociones/mostrar/:id", component: DetallePromocionesPage, exact: true },
  { path: "/promociones/editar/:id", component: EdicionPromocionesPage, exact: true }
];

export default rutas;
