import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import registerServiceWorker from "registerServiceWorker";
import Bluebird from "bluebird";
import { Provider } from "react-redux";
import store from "core/application/store/store";
import history from "core/application/routes/history";
import { IntlProvider } from "react-intl";
import { addLocale, language, messages } from "core/application/i18/index";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/popper.js/dist/esm/popper.min.js';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './assets/css/index.css';
import AlertPage from "core/application/components/alerts/alert-page";
import Menu from "core/application/components/menus/menu-principal";
import AppRoutes from "core/application/routes/routes";

window.Promise = Bluebird;
Bluebird.config({ warnings: false});
window.addEventListener('unhandlerrejection', error => {
  error.preventDefault();
  if(process.env.NODE_ENV !== 'production'){
    console.warn('Unhandler promise rejection warning.', error.detail);
  }
});

addLocale();

ReactDOM.render(
  <Provider store={ store }>
    <IntlProvider locale={language} messages={messages()[language]}>
      <Router history={history} >
        <div className="App container-fluid">
          <AlertPage />
          <Menu />
          <AppRoutes />
        </div>
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
