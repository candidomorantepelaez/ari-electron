import fetch from 'isomorphic-fetch';

const saveCliente = (cliente) => fetch('http://localhost:8080/api/cliente',{
  method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(cliente)
});

const updateCliente = (cliente) => fetch('http://localhost:8080/api/cliente',{
  method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(cliente)
});

const getCliente = (id) => fetch('http://localhost:8080/api/cliente/'+id,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
});

const removeCliente = (id) => fetch('http://localhost:8080/api/cliente/'+id,{
  method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: false
});

const getAllClientes = () => fetch('http://localhost:8080/api/clientes/list',{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
} );

export default {
  saveCliente,
  updateCliente,
  getCliente,
  removeCliente,
  getAllClientes,
};