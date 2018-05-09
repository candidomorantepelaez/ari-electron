import React from 'react';
import CreacionProductosPage from "./../pages/cliente/creacion-productos-page";
import DetalleProductosPage from "./../pages/cliente/detalle-productos-page";
import EdicionProductosPage from "./../pages/cliente/edicion-productos-page";
import ListadoProductosPage from "./../pages/cliente/listado-productos-page";

const rutas = [
  { path: "/productos", component: ListadoProductosPage, exact: true },
  { path: "/productos/crear", component: CreacionProductosPage, exact: true },
  { path: "/productos/mostrar/:id", component: DetalleProductosPage, exact: true },
  { path: "/productos/editar/:id", component: EdicionProductosPage, exact: true }
];

export default rutas;
