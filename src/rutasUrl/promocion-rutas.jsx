import React from 'react';
import CreacionPromocionesPage from "./../pages/cliente/creacion-promociones-page";
import DetallePromocionesPage from "./../pages/cliente/detalle-promociones-page";
import EdicionPromocionesPage from "./../pages/cliente/edicion-promociones-page";
import ListadoPromocionesPage from "./../pages/cliente/listado-promociones-page";

const rutas = [
  { path: "/promociones", component: ListadoPromocionesPage, exact: true },
  { path: "/promociones/crear", component: CreacionPromocionesPage, exact: true },
  { path: "/promociones/mostrar/:id", component: DetallePromocionesPage, exact: true },
  { path: "/promociones/editar/:id", component: EdicionPromocionesPage, exact: true }
];

export default rutas;
