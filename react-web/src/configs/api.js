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

const saveConfig = (config) => new Promise((resolve, reject) => {
  post(`${apiPath}/api/config`, merge(options, { body: config }))
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const editConfig = (config) => new Promise((resolve, reject) => {
  put(`${apiPath}/api/config`, merge(options, { body: config }))
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchConfig = (id) => new Promise((resolve, reject) => {
  get(`${apiPath}/api/config/${id}`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchConfigs = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/configs/list`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const countConfigs = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/configs/count`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const deleteConfig = (id) => new Promise((resolve, reject) => {
  del(`${apiPath}/api/config/${id}`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

export default {
  saveConfig,
  editConfig,
  searchConfig,
  searchConfigs,
  countConfigs,
  deleteConfig,
};