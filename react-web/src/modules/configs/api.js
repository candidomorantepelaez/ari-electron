import { get, post, put, del} from "core/application/api/index";
import { apiPath } from "core/application/constans";

const saveConfig = (config) => new Promise((resolve, reject) => {
  post(`${apiPath}/api/config`,{ body: config })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const editConfig = (config) => new Promise((resolve, reject) => {
  put(`${apiPath}/api/config`, { body: config })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchConfig = (id) => new Promise((resolve, reject) => {
  get(`${apiPath}/api/config/${id}`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchConfigs = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/configs/list`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const countConfigs = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/configs/count`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const deleteConfig = (id) => new Promise((resolve, reject) => {
  del(`${apiPath}/api/config/${id}`)
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