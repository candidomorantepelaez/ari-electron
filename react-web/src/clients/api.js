import { get, post, put, del} from "core/application/api/index";
import { apiPath } from "core/application/constans";

const deleteClient = (id) => new Promise((resolve, reject) => {
  del(`${apiPath}/api/client/${id}`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const editClient = (cliente) => new Promise((resolve, reject) => {
  put(`${apiPath}/api/client`, { body: cliente })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const saveClient = (cliente) => new Promise((resolve, reject) => {
  post(`${apiPath}/api/client`, { body: cliente })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchClient = (id) => new Promise((resolve, reject) => {
  get(`${apiPath}/api/client/${id}`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchClients = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/clients/list`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchClientWithRoute = (id) => new Promise((resolve, reject) => {
  get(`${apiPath}/api/client/${id}/route`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchClientsWithRoute = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/clients/list/route`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const countClients = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/clients/count`)
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
