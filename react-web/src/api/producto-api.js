import fetch from 'isomorphic-fetch';
import constants from "./../config/constants";

const saveProducto = (producto) => fetch(`${constants.apiPath}/api/producto`,{
  method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(producto)
});

const updateProducto = (producto) => fetch(`${constants.apiPath}/api/producto`,{
  method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(producto)
});

const getProducto = (id) => fetch(`${constants.apiPath}/api/producto/${id}`,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
});

const removeProducto = (id) => fetch(`${constants.apiPath}/api/producto/${id}`,{
  method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: false
});

const getAllProductos = () => fetch(`${constants.apiPath}/api/productos/list`,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
} );

const getCountProductos = () => fetch(`${constants.apiPath}/api/productos/count`,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
} );

export default {
  saveProducto,
  updateProducto,
  getProducto,
  removeProducto,
  getAllProductos,
  getCountProductos
};