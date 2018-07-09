import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WellcomePage from "./../../../pages/wellcome/wellcome-page";
import module from "./../module/index";
import HomePage from './../../../pages/home/home-page';

const rutas = module.getRoutes().map((ruta, key) => <Route path={ruta.path} component={ruta.component} exact={ruta.exact} key={key} />);

const AppRoutes = () => (
    <Switch>
      {rutas}
      {console.log(rutas)}
      <Route path="/home" component={ HomePage } exact={ true } />
      <Route path="/" component={ HomePage } exact={ true } />
      <Route component={ WellcomePage } />
    </Switch>
);

export default AppRoutes;
