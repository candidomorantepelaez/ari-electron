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

const deleteSale = (id) => new Promise((resolve, reject) => {
  del(`${apiPath}/api/venta/${id}`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const editSale = (sale) => new Promise((resolve, reject) => {
  put(`${apiPath}/api/venta`, merge(options, { body: JSON.stringify(sale) }))
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const saveSale = (sale) => new Promise((resolve, reject) => {
  post(`${apiPath}/api/venta`, merge(options, { body: JSON.stringify(sale) }))
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchSale = (id) => new Promise((resolve, reject) => {
  get(`${apiPath}/api/venta/${id}`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchSales = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/ventas/list`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const countSales = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/ventas/count`, options)
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