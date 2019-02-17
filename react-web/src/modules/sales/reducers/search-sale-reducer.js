import { requestType, successType, failureType } from "fredux";
import { SEARCH_SALE } from "sales/actions";
import { combineReducers } from 'redux';

const initialState = {
  searchSale: {
    searching: false,
    sale: {},
  },
};

export function searching(state = initialState.searchSale.searching, { type }) {
  switch(type){
    case requestType(SEARCH_SALE):
      return true;
    case successType(SEARCH_SALE):
      return false;
    case failureType(SEARCH_SALE):
      return false;
    default:
      return state;
  }
}

export function sale(state=initialState.searchSale.sale, { type, payload }) {
  switch(type){
    case requestType(SEARCH_SALE):
      return {};
    case successType(SEARCH_SALE):
      return payload.response;
    case failureType(SEARCH_SALE):
      return {};
    default:
      return state;
  }
}

const getSearchSaleState = (state) => state.sales.searchSale;

export const getSearching = state => getSearchSaleState(state).searching;
export const getSale = state => getSearchSaleState(state).sale;

export default combineReducers({
  searching,
  sale,
});