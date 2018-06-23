import fetch from 'isomorphic-fetch';
import constants from "./../config/constants";

const saveRuta = (ruta) => fetch(`${constants.apiPath}/api/ruta`,{
  method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(ruta)
});

const updateRuta = (ruta) => fetch(`${constants.apiPath}/api/ruta`,{
  method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(ruta)
});

const getRuta = (id) => fetch(`${constants.apiPath}/api/ruta/${id}`,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
});

const removeRuta = (id) => fetch(`${constants.apiPath}/api/ruta/${id}`,{
  method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: false
});

const getAllRutas = () => fetch(`${constants.apiPath}/api/rutas/list`,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
} );

const getCountRutas = () => fetch(`${constants.apiPath}/api/rutas/count`,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
} );

export default {
  saveRuta,
  updateRuta,
  getRuta,
  removeRuta,
  getAllRutas,
  getCountRutas
};