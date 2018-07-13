import { get, post, put, del} from "fredux-api-utils";
import { apiPath } from "core/application/constans";
import { merge } from "ramda";

const options = {
  headers: {
    'Content-Type': 'application/json',
  },
  mode: "cors",
  cache: "no-store"
};

const deleteRoute = (id) => new Promise((resolve, reject) => {
  del(`${apiPath}/api/ruta/${id}`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const editRoute = (route) => new Promise((resolve, reject) => {
  put(`${apiPath}/api/ruta`, merge(options, { body: route }))
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const saveRoute = (route) => new Promise((resolve, reject) => {
  post(`${apiPath}/api/ruta`, merge(options, { body: route }))
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchRoute = (id) => new Promise((resolve, reject) => {
  get(`${apiPath}/api/ruta/${id}`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchRoutes = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/rutas/list`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const countRoutes = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/rutas/count`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

export default {
  deleteRoute,
  editRoute,
  saveRoute,
  searchRoute,
  searchRoutes,
  countRoutes,
};