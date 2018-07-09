import { PROMISE_CALL } from "fredux";
import api from "promotions/api";

export const DELETE_PROMOTION = "promotions/deletePromotion";
export const EDIT_PROMOTION = "promotions/editPromotion";
export const SAVE_PROMOTION = "promotions/savePromotion";
export const SEARCH_PROMOTION = "promotion/searchPromotion";
export const SEARCH_PROMOTIONS = "promotion/searchPromotions";
export const COUNT_PROMOTIONS = "promotions/countPromotions";

export const deletePromotion = (id) => ({
  type: DELETE_PROMOTION,
  [PROMISE_CALL]: () => api.deletePromotion(id),
});

export const editPromotion = (promotion) => ({
  type: EDIT_PROMOTION,
  [PROMISE_CALL]: () => api.editPromotion(promotion),
});

export const savePromotion = (product) => ({
  type: SAVE_PROMOTION,
  [PROMISE_CALL]: () => api.savePromotion(product),
});

export const searchPromotion = (id) => ({
  type: SEARCH_PROMOTION,
  [PROMISE_CALL]: () => api.searchPromotion(id),
});

export const searchPromotions = () => ({
  type: SEARCH_PROMOTIONS,
  [PROMISE_CALL]: () => api.searchPromotions(),
});

export const countPromotions = () => ({
  type: COUNT_PROMOTIONS,
  [PROMISE_CALL]: () => api.countPromotions(),
});