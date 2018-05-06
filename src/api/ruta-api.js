import fetch from 'isomorphic-fetch';

const saveRuta = (ruta) => fetch('http://localhost:8080/api/ruta',{
  method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(ruta)
});

const updateRuta = (ruta) => fetch('http://localhost:8080/api/ruta',{
  method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(ruta)
});

const getRuta = (id) => fetch('http://localhost:8080/api/ruta/'+id,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
});

const removeRuta = (id) => fetch('http://localhost:8080/api/ruta/'+id,{
  method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: false
});

const getAllRutas = () => fetch('http://localhost:8080/api/rutas/list',{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
} );

export default {
  saveRuta,
  updateRuta,
  getRuta,
  removeRuta,
  getAllRutas,
};