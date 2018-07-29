import { get, post, put, del } from "core/application/api/index";
import { apiPath } from "core/application/constans";

const deleteRoute = (id) => new Promise((resolve, reject) => {
  del(`${apiPath}/api/route/${id}`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const editRoute = (route) => new Promise((resolve, reject) => {
  put(`${apiPath}/api/route`, { body: route })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const saveRoute = (route) => new Promise((resolve, reject) => {
  post(`${apiPath}/api/route`, { body: route })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchRoute = (id) => new Promise((resolve, reject) => {
  get(`${apiPath}/api/route/${id}`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchRoutes = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/routes/list`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const countRoutes = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/routes/count`)
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