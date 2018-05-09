import React from 'react';
import CreacionClientesPage from "./../pages/cliente/creacion-clientes-page";
import DetalleClientesPage from "./../pages/cliente/detalle-clientes-page";
import EdicionClientesPage from "./../pages/cliente/edicion-clientes-page";
import ListadoClientesPage from "./../pages/cliente/listado-clientes-page";

const rutas = [
  { path: "/clientes", component: ListadoClientesPage, exact: true },
  { path: "/clientes/crear", component: CreacionClientesPage, exact: true },
  { path: "/clientes/mostrar/:id", component: DetalleClientesPage, exact: true },
  { path: "/clientes/editar/:id", component: EdicionClientesPage, exact: true }
];

export default rutas;
