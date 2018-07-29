import { get, post, put, del} from "core/application/api/index";
import { apiPath } from "core/application/constans";

const deleteProduct = (id) => new Promise((resolve, reject) => {
  del(`${apiPath}/api/product/${id}`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const editProduct = (product) => new Promise((resolve, reject) => {
  put(`${apiPath}/api/product`, { body: product })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const saveProduct = (product) => new Promise((resolve, reject) => {
  post(`${apiPath}/api/product`, { body: product })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchProduct = (id) => new Promise((resolve, reject) => {
  get(`${apiPath}/api/product/${id}`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchProducts = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/products/list`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const countProducts = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/products/count`)
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
