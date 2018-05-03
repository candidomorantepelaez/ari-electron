import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './app';
import HomePage from "./pages/home/home-page";
import CreacionClientesPage from "./pages/cliente/creacion-clientes-page";
import DetalleClientesPage from "./pages/cliente/detalle-clientes-page";
import EdicionClientesPage from "./pages/cliente/edicion-clientes-page";
import ListadoClientesPage from "./pages/cliente/listado-clientes-page";
import ProductoPage from "./pages/producto/producto-page";
import Pagina404 from "./pages/errores/pagina404";

const AppRoutes = () =>
  <App>
    <Switch>
      <Route path="/home" component={ HomePage } exact={true} />
      <Route path="/clientes" component={ ListadoClientesPage } exact={true}/>
      <Route path="/clientes/crear" component={ CreacionClientesPage } exact={true} />
      <Route path="/clientes/mostrar/:id" component={ DetalleClientesPage } exact={true} />
      <Route path="/clientes/editar/:id" component={ EdicionClientesPage } exact={true} />
      <Route path="/productos" component={ ProductoPage } exact={true} />
      <Route path="/" component={ HomePage } exact={true} />
      <Route component={ Pagina404 } />
    </Switch>
  </App>;

export default AppRoutes;
