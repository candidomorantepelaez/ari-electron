import { combineReducers } from 'redux';
import clientes from "./cliente";
import globales from "./globales";

export default combineReducers({
  clientes,
  globales,
});