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

const deletePromotion = (id) => new Promise((resolve, reject) => {
  del(`${apiPath}/api/promocion/${id}`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const editPromotion = (promotion) => new Promise((resolve, reject) => {
  put(`${apiPath}/api/promocion`, merge(options, { body: JSON.stringify(promotion) }))
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const savePromotion = (promotion) => new Promise((resolve, reject) => {
  post(`${apiPath}/api/promocion`, merge(options, { body: JSON.stringify(promotion) }))
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchPromotion = (id) => new Promise((resolve, reject) => {
  get(`${apiPath}/api/promocion/${id}`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchPromotions = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/promociones/list`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const countPromotions = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/promociones/count`, options)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

export default {
  deletePromotion,
  editPromotion,
  savePromotion,
  searchPromotion,
  searchPromotions,
  countPromotions,
};