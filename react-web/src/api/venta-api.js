import fetch from 'isomorphic-fetch';
import constants from "./../config/constants";

const saveVenta = (venta) => fetch(`${constants.apiPath}/api/venta`,{
  method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(venta)
});

const updateVenta = (venta) => fetch(`${constants.apiPath}/api/venta`,{
  method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(venta)
});

const getVenta = (id) => fetch(`${constants.apiPath}/api/venta/${id}`,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
});

const removeVenta = (id) => fetch(`${constants.apiPath}/api/venta/${id}`,{
  method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: false
});

const getAllVentas = () => fetch(`${constants.apiPath}/api/ventas/list`,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
} );

const getCountVentas = () => fetch(`${constants.apiPath}/api/ventas/count`,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
} );

export default {
  saveVenta,
  updateVenta,
  getVenta,
  removeVenta,
  getAllVentas,
  getCountVentas
};