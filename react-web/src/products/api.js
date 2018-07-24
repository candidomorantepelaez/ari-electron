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

const deleteProduct = (id) => new Promise((resolve, reject) => {
  del(`${apiPath}/api/producto/${id}`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const editProduct = (product) => new Promise((resolve, reject) => {
  put(`${apiPath}/api/producto`, merge(options, { body: product }))
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const saveProduct = (product) => new Promise((resolve, reject) => {
  post(`${apiPath}/api/producto`, merge(options, { body: product }))
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchProduct = (id) => new Promise((resolve, reject) => {
  get(`${apiPath}/api/producto/${id}`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchProducts = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/productos/list`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const countProducts = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/productos/count`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

export default {
  deleteProduct,
  editProduct,
  saveProduct,
  searchProduct,
  searchProducts,
  countProducts,
};
