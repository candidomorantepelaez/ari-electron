import { get, post, put, del} from "core/application/api/index";
import { apiPath } from "core/application/constans";

const deleteSale = (id) => new Promise((resolve, reject) => {
  del(`${apiPath}/api/sale/${id}`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const editSale = (sale) => new Promise((resolve, reject) => {
  put(`${apiPath}/api/sale`, { body: sale })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const saveSale = (sale) => new Promise((resolve, reject) => {
  post(`${apiPath}/api/sale`, { body: sale })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchSale = (id) => new Promise((resolve, reject) => {
  get(`${apiPath}/api/sale/${id}`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchSales = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/sales/list`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const countSales = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/sales/count`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

export default {
  deleteSale,
  editSale,
  saveSale,
  searchSale,
  searchSales,
  countSales,
};