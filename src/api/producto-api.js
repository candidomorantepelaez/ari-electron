import fetch from 'isomorphic-fetch';

const saveProducto = (producto) => fetch('http://localhost:8080/api/producto',{
  method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(producto)
});

const updateProducto = (producto) => fetch('http://localhost:8080/api/producto',{
  method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(producto)
});

const getProducto = (id) => fetch('http://localhost:8080/api/producto/'+id,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
});

const removeProducto = (id) => fetch('http://localhost:8080/api/producto/'+id,{
  method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: false
});

const getAllProductos = () => fetch('http://localhost:8080/api/productos/list',{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
} );

export default {
  saveProducto,
  updateProducto,
  getProducto,
  removeProducto,
  getAllProductos,
};