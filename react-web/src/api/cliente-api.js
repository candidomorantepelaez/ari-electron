import fetch from 'isomorphic-fetch';
import constants from "./../config/constants";

const saveCliente = (cliente) => fetch(`${constants.apiPath}/api/cliente`,{
  method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(cliente)
});

const updateCliente = (cliente) => fetch(`${constants.apiPath}/api/cliente`,{
  method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(cliente)
});

const getClienteWithRuta = (id) => fetch(`${constants.apiPath}/api/cliente/${id}/ruta`,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
});

const getCliente = (id) => fetch(`${constants.apiPath}/api/cliente/${id}`,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
});

const removeCliente = (id) => fetch(`${constants.apiPath}/api/cliente/${id}`,{
  method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: false
});

const getAllClientes = () => fetch(`${constants.apiPath}/api/clientes/list`,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
});

const getAllClientesWithRuta = () => fetch(`${constants.apiPath}/api/clientes/list/ruta`,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
});

const getCountClientes = () => fetch(`${constants.apiPath}/api/clientes/count`,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
} );

export default {
  saveCliente,
  updateCliente,
  getCliente,
  getClienteWithRuta,
  removeCliente,
  getAllClientes,
  getAllClientesWithRuta,
  getCountClientes
};