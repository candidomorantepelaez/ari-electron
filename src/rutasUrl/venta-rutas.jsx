import React from 'react';
import CreacionVentasPage from "./../pages/cliente/creacion-ventas-page";
import DetalleVentasPage from "./../pages/cliente/detalle-ventas-page";
import EdicionVentasPage from "./../pages/cliente/edicion-ventas-page";
import ListadoVentasPage from "./../pages/cliente/listado-ventas-page";

const rutas = [
  { path: "/ventas", component: ListadoVentasPage, exact: true },
  { path: "/ventas/crear", component: CreacionVentasPage, exact: true },
  { path: "/ventas/mostrar/:id", component: DetalleVentasPage, exact: true },
  { path: "/ventas/editar/:id", component: EdicionVentasPage, exact: true }
];

export default rutas;
