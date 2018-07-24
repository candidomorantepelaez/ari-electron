import { SEARCH_SALES } from "sales/actions";
import { requestType, successType, failureType } from "fredux";
import { combineReducers } from 'redux';

const initialState = {
  searchSales: {
    searchingSales: false,
    sales: [],
  },
};

export function searchingSales(state = initialState.searchSales.searchingSales, { type }) {
  switch(type){
    case requestType(SEARCH_SALES):
      return true;
    case successType(SEARCH_SALES):
      return false;
    case failureType(SEARCH_SALES):
      return false;
    default:
      return state;
  }
}

export function sales(state=initialState.searchSales.sales, { type, payload }) {
  switch(type){
    case requestType(SEARCH_SALES):
      return [];
    case successType(SEARCH_SALES):
      return payload.response;
    case failureType(SEARCH_SALES):
      return [];
    default:
      return state;
  }
}

const getSearchSalesState = (state) => state.sales.searchSales;

export const getSearchingSales = state => getSearchSalesState(state).searchingSales;
export const getSales = state => getSearchSalesState(state).sales;

export default combineReducers({
  searchingSales,
  sales,
});