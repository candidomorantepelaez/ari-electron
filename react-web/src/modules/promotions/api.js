import { get, post, put, del} from "core/application/api/index";
import { apiPath } from "core/application/constans";

const deletePromotion = (id) => new Promise((resolve, reject) => {
  del(`${apiPath}/api/discount/${id}`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const editPromotion = (promotion) => new Promise((resolve, reject) => {
  put(`${apiPath}/api/discount`, { body: JSON.stringify(promotion) })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const savePromotion = (promotion) => new Promise((resolve, reject) => {
  post(`${apiPath}/api/discount`, { body: JSON.stringify(promotion) })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchPromotion = (id) => new Promise((resolve, reject) => {
  get(`${apiPath}/api/discount/${id}`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchPromotions = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/discounts/list`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const countPromotions = () => new Promise((resolve, reject) => {
  get(`${apiPath}/api/discounts/count`)
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