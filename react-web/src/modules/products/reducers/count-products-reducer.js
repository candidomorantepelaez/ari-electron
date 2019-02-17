import { requestType, successType, failureType } from "fredux";
import { COUNT_PRODUCTS } from "products/actions";
import { combineReducers } from 'redux';

const initialState = {
  countProducts: {
    countingProducts: false,
    numberOfProducts: 0,
  },
};

export function countingProducts(state = initialState.countProducts.countingProducts, { type }) {
  switch(type){
    case requestType(COUNT_PRODUCTS):
      return true;
    case successType(COUNT_PRODUCTS):
      return false;
    case failureType(COUNT_PRODUCTS):
      return false;
    default:
      return state;
  }
}

export function numberOfProducts(state = initialState.countProducts.numberOfProducts, { type, payload }) {
  switch(type){
    case requestType(COUNT_PRODUCTS):
      return 0;
    case successType(COUNT_PRODUCTS):
      return payload.numeroProductos;
    case failureType(COUNT_PRODUCTS):
      return 0;
    default:
      return state;
  }
}

const getCountProductsState = (state) => {
  return state.products.countProducts;
}

export const getCountingProducts = state => {
  return getCountProductsState(state).countingProducts;
};
export const getNumberOfProducts = state => {
  return getCountProductsState(state).numberOfProducts;
};

export default combineReducers({
  countingProducts,
  numberOfProducts,
});
