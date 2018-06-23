import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WellcomePage from "./pages/wellcome/wellcome-page";
import rutasUrls from "./rutasUrl";
import HomePage from './pages/home/home-page';

const rutas = rutasUrls.map((ruta, key) => <Route path={ruta.path} component={ruta.component} exact={ruta.exact} key={key} />);

const AppRoutes = () => (
    <Switch>
      {rutas}
      <Route path="/home" component={ HomePage } exact={ true } />
      <Route path="/" component={ HomePage } exact={ true } />
      <Route component={ WellcomePage } />
    </Switch>
);

export default AppRoutes;
