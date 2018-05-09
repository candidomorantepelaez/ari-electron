import React from 'react';
import CreacionRutasPage from "./../pages/cliente/creacion-rutas-page";
import DetalleRutasPage from "./../pages/cliente/detalle-rutas-page";
import EdicionRutasPage from "./../pages/cliente/edicion-rutas-page";
import ListadoRutasPage from "./../pages/cliente/listado-rutas-page";

const rutas = [
  { path: "/rutas", component: ListadoRutasPage, exact: true },
  { path: "/rutas/crear", component: CreacionRutasPage, exact: true },
  { path: "/rutas/mostrar/:id", component: DetalleRutasPage, exact: true },
  { path: "/rutas/editar/:id", component: EdicionRutasPage, exact: true }
];

export default rutas;
