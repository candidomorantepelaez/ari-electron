import { get, post, put, del} from "core/application/api/index";
import { apiPath } from "core/application/constans";

const saveStore = (store) => new Promise((resolve, reject) => {
  post(`${apiPath}/store`, { body: store })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const updateStore = (id, store) => new Promise((resolve, reject) => {
  put(`${apiPath}/store/${id}`, { body: store })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const findOneStore = (id) => new Promise((resolve, reject) => {
  get(`${apiPath}/store/${id}`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const removeStore = (id) => new Promise((resolve, reject) => {
  del(`${apiPath}/store/${id}`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchStores = (search) => new Promise((resolve, reject) => {
  post(`${apiPath}/stores/search`, { body: search })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const listStores = () => new Promise((resolve, reject) => {
  get(`${apiPath}/stores/list`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const paginateStores = (page) => new Promise((resolve, reject) => {
  post(`${apiPath}/stores/paginate`, { body: page })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const countStores = () => new Promise((resolve, reject) => {
  get(`${apiPath}/stores/count`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

export default {
  saveStore,
  updateStore,
  findOneStore,
  removeStore,
  searchStores,
  listStores,
  paginateStores,
  countStores,
};
