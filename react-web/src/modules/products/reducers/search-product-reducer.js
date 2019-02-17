import { requestType, successType, failureType } from "fredux";
import { SEARCH_PRODUCT } from "products/actions";
import { combineReducers } from 'redux';

const initialState = {
  searchProduct: {
    searchingProduct: false,
    product: {},
  },
};

export function searchingProduct(state = initialState.searchProduct.searchingProduct, { type }) {
  switch(type){
    case requestType(SEARCH_PRODUCT):
      return true;
    case successType(SEARCH_PRODUCT):
      return false;
    case failureType(SEARCH_PRODUCT):
      return false;
    default:
      return state;
  }
}

export function product(state=initialState.searchProduct.product, { type, payload }) {
  switch(type){
    case requestType(SEARCH_PRODUCT):
      return {};
    case successType(SEARCH_PRODUCT):
      return payload.response;
    case failureType(SEARCH_PRODUCT):
      return {};
    default:
      return state;
  }
}

const getSearchProductState = (state) => state.products.searchProduct;

export const getSearchingProduct = state => getSearchProductState(state).searchingProduct;
export const getProduct = state => getSearchProductState(state).product;

export default combineReducers({
  searchingProduct,
  product,
});