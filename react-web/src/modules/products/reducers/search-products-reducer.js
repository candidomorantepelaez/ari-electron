import { requestType, successType, failureType } from "fredux";
import { SEARCH_PRODUCTS } from "products/actions";
import { combineReducers } from 'redux';

const initialState = {
  searchProducts: {
    searchingProducts: false,
    products: [],
  },
};

export function searchingProducts(state = initialState.searchProducts.searchingProducts, { type }) {
  switch(type){
    case requestType(SEARCH_PRODUCTS):
      return true;
    case successType(SEARCH_PRODUCTS):
      return false;
    case failureType(SEARCH_PRODUCTS):
      return false;
    default:
      return state;
  }
}

export function products(state=initialState.searchProducts.products, { type, payload }) {
  switch(type){
    case requestType(SEARCH_PRODUCTS):
      return [];
    case successType(SEARCH_PRODUCTS):
      return payload.response;
    case failureType(SEARCH_PRODUCTS):
      return [];
    default:
      return state;
  }
}

const getSearchProductsState = (state) => state.products.searchProducts;

export const getSearchingProducts = state => getSearchProductsState(state).searchingProducts;
export const getProducts = state => getSearchProductsState(state).products;

export default combineReducers({
  searchingProducts,
  products
});