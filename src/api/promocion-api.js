import fetch from 'isomorphic-fetch';

const savePromocion = (promocion) => fetch('http://localhost:8080/api/promocion',{
  method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(promocion)
});

const updatePromocion = (promocion) => fetch('http://localhost:8080/api/promocion',{
  method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(promocion)
});

const getPromocion = (id) => fetch('http://localhost:8080/api/promocion/'+id,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
});

const removePromocion = (id) => fetch('http://localhost:8080/api/promocion/'+id,{
  method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: false
});

const getAllPromociones = () => fetch('http://localhost:8080/api/promocion/list',{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
} );

export default {
  savePromocion,
  updatePromocion,
  getPromocion,
  removePromocion,
  getAllPromociones,
};