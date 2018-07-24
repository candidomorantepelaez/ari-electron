import { requestType, successType, failureType } from "fredux";
import { EDIT_PRODUCT } from "products/actions";
import { combineReducers } from 'redux';

const initialState = {
  editProduct: {
    editing: false,
    productEdited: {},
  },
};

export function editing(state=initialState.editProduct.editing, { type }) {
  switch(type){
    case requestType(EDIT_PRODUCT):
      return true;
    case successType(EDIT_PRODUCT):
      return false;
    case failureType(EDIT_PRODUCT):
      return false;
    default:
      return state;
  }
}

export function productEdited(state=initialState.editProduct.productEdited, { type, payload }) {
  switch(type){
    case requestType(EDIT_PRODUCT):
      return state;
    case successType(EDIT_PRODUCT):
      return payload.response;
    case failureType(EDIT_PRODUCT):
      return state;
    default:
      return state;
  }
}

const getEditProductState = (state) => state.products.editProduct;

export const getEditing = state => getEditProductState(state).editing;
export const getProductEdited = state => getEditProductState(state).productEdited;

export default combineReducers({
  editing,
  productEdited,
});
