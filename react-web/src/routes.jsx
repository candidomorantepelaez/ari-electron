import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Pagina404 from "./pages/errores/pagina404";
import rutasUrls from "./rutasUrl";
import HomePage from './pages/home/home-page';

const rutas = rutasUrls.map((ruta, key) => <Route path={ruta.path} component={ruta.component} exact={ruta.exact} key={key} />);

const AppRoutes = () => (
    <Switch>
      {rutas}
      <Route path="/home" component={ HomePage } exact={ true } />
      <Route path="/" component={ HomePage } exact={ true } />
      <Route component={ Pagina404 } />
    </Switch>
);

export default AppRoutes;
