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

const deleteClient = (id) => new Promise((resolve, reject) => {
  del(`${apiPath}/api/cliente/${id}`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const editClient = (cliente) => new Promise((resolve, reject) => {
  put(`${apiPath}/api/cliente`, merge(options, { body: cliente }))
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const saveClient = (cliente) => new Promise((resolve, reject) => {
  post(`${apiPath}/api/cliente`, merge(options, { body: cliente }))
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchClient = (id) => new Promise((resolve, reject) => {
  get(`${apiPath}/api/cliente/${id}`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchClients = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/clientes/list`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchClientWithRoute = (id) => new Promise((resolve, reject) => {
  get(`${apiPath}/api/cliente/${id}/ruta`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchClientsWithRoute = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/clientes/list/ruta`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const countClients = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/clientes/count`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

export default {
  deleteClient,
  editClient,
  saveClient,
  searchClient,
  searchClients,
  searchClientWithRoute,
  searchClientsWithRoute,
  countClients,
};
