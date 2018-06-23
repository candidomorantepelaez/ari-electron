import listadoClientes from "./listado-clientes";
import listadoClientesConRuta from "./listado-clientes-con-ruta";
import buscarCliente from "./buscar-cliente";
import buscarClienteConRuta from "./buscar-cliente-con-ruta";
import guardarCliente from "./guardar-cliente";
import editarCliente from "./editar-cliente";
import borrarClientes from "./borrar-cliente";
import contarClientes from "./contar-clientes";
import { combineReducers } from 'redux';

export default combineReducers({
  listadoClientes,
  listadoClientesConRuta,
  buscarCliente,
  buscarClienteConRuta,
  guardarCliente,
  editarCliente,
  borrarClientes,
  contarClientes
});