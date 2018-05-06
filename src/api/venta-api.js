import fetch from 'isomorphic-fetch';

const saveVenta = (venta) => fetch('http://localhost:8080/api/venta',{
  method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(venta)
});

const updateVenta = (venta) => fetch('http://localhost:8080/api/venta',{
  method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(venta)
});

const getVenta = (id) => fetch('http://localhost:8080/api/venta/'+id,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
});

const removeVenta = (id) => fetch('http://localhost:8080/api/venta/'+id,{
  method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: false
});

const getAllVentas = () => fetch('http://localhost:8080/api/ventas/list',{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
} );

export default {
  saveVenta,
  updateVenta,
  getVenta,
  removeVenta,
  getAllVentas,
};