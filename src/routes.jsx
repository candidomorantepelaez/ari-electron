import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Pagina404 from "./pages/errores/pagina404";
import rutasUrls from "./rutasUrl";

const rutas = rutasUrls.map((ruta, key) => <Route path={ruta.path} component={ruta.component} exact={ruta.exact} key={key} />);

const AppRoutes = () => (
    <Switch>
      {rutas}
      <Route component={ Pagina404 } />
    </Switch>
);

export default AppRoutes;
