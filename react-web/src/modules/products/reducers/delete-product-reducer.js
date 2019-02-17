import { requestType, successType, failureType } from "fredux";
import { DELETE_PRODUCT } from "products/actions";
import { combineReducers } from 'redux';

const initialState = {
  deleteProduct: {
    deleting: false,
    productDeleted: {},
  },
};

export function deleting(state=initialState.deleteProduct.deleting, { type }) {
  switch(type){
    case requestType(DELETE_PRODUCT):
      return true;
    case successType(DELETE_PRODUCT):
      return false;
    case failureType(DELETE_PRODUCT):
      return false;
    default:
      return state;
  }
}

export function productDeleted(state=initialState.deleteProduct.productDeleted, { type, payload }) {
  switch(type){
    case requestType(DELETE_PRODUCT):
      return state;
    case successType(DELETE_PRODUCT):
      return payload.response;
    case failureType(DELETE_PRODUCT):
      return state;
    default:
      return state;
  }
}

const getDeleteProductState = (state) => state.products.deleteProduct;

export const getDeleting = state => {
  return getDeleteProductState(state).deleting;
}

export const getProductDeleted = state => {
  return getDeleteProductState(state).productDeleted;
}

export default combineReducers({
  deleting,
  productDeleted,
});
