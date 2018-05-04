import listadoClientes from "./listado-clientes";
import buscarCliente from "./buscar-cliente";
import guardarCliente from "./guardar-cliente";
import editarCliente from "./editar-cliente";
import borrarClientes from "./borrar-cliente";
import { combineReducers } from 'redux';

export default combineReducers({
  listadoClientes,
  buscarCliente,
  guardarCliente,
  editarCliente,
  borrarClientes,
});