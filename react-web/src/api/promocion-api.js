import fetch from 'isomorphic-fetch';
import constants from "./../config/constants";

const savePromocion = (promocion) => fetch(`${constants.apiPath}/api/promocion`,{
  method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(promocion)
});

const updatePromocion = (promocion) => fetch(`${constants.apiPath}/api/promocion`,{
  method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(promocion)
});

const getPromocion = (id) => fetch(`${constants.apiPath}/api/promocion/${id}`,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
});

const removePromocion = (id) => fetch(`${constants.apiPath}/api/promocion/${id}`,{
  method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: false
});

const getAllPromociones = () => fetch(`${constants.apiPath}/api/promociones/list`,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
} );

const getCountPromociones = () => fetch(`${constants.apiPath}/api/promociones/count`,{
  method: 'GET', headers: {'Content-Type': 'application/json'}, body: false
} );

export default {
  savePromocion,
  updatePromocion,
  getPromocion,
  removePromocion,
  getAllPromociones,
  getCountPromociones
};