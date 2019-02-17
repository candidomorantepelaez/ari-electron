import { requestType, successType, failureType } from "fredux";
import { SAVE_PRODUCT } from "products/actions";
import { combineReducers } from 'redux';

const initialState = {
  saveProduct: {
    saving: false,
    productSaved: {},
  },
};

export function saving(state=initialState.saveProduct.saving, { type }) {
  switch(type){
    case requestType(SAVE_PRODUCT):
      return true;
    case successType(SAVE_PRODUCT):
      return false;
    case failureType(SAVE_PRODUCT):
      return false;
    default:
      return state;
  }
}

export function productSaved(state=initialState.saveProduct.productSaved, { type, payload }) {
  switch(type){
    case requestType(SAVE_PRODUCT):
      return state;
    case successType(SAVE_PRODUCT):
      return payload.response;
    case failureType(SAVE_PRODUCT):
      return state;
    default:
      return state;
  }
}

const getSaveProductState = (state) => state.products.saveProduct;

export const getSaving = state => getSaveProductState(state).saving;
export const getProductSaved = state => getSaveProductState(state).productSaved;

export default combineReducers({
  saving,
  productSaved
});
