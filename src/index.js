import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/popper.js/dist/esm/popper.min.js';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './assets/iconos/fontawesome-all.min.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './routes';
import Bluebird from 'bluebird';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import clienteReducers from './reducers/cliente-reducers';
import { logger } from './reactions/globales/logger-reaction';
import { cliente } from './reactions/cliente/cliente-reaction';
import { crashReporter } from './reactions/globales/crash-reporter-reaction';
import history from "./config/history";


let store = createStore(clienteReducers,
  applyMiddleware(thunkMiddleware,
    logger,
    crashReporter,
    cliente));

//bluebird configuration
window.Promise = Bluebird;

Bluebird.config({ warnings: false});

window.addEventListener('unhandlerrejection', error => {
  error.preventDefault();

  if(process.env.NODE_ENV !== 'production'){
    console.warn('Unhandler promise rejection warning.', error.detail);
  }
});

ReactDOM.render(
  <Provider store={ store }>
    <Router history={history} >
      <AppRoutes />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
